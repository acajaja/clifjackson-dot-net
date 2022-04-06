<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Spatie\Navigation\Navigation;
use Spatie\Navigation\Section;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private $nav;

    public function __construct()
    {
        $this->nav = app(Navigation::class)
            ->add('home', route('home'))
            ->add('web', route('web'), function (Section $section) {
                $section->add('work samples', route('web', ['page' => 'work-samples']), function (Section $sectionB) {
                        $sectionB->add('canvas app', route('web-work-samples', ['page' => 'canvas-app']));
                        $sectionB->add('interactive map', route('web-work-samples', ['page' => 'interactive-map']));
                    })
                    ->add('geeking out', route('web', ['page' => 'geeking-out']));
            })
            ->add('music', route('music'), function (Section $section) {
                $section->add('discography', route('music', ['page' => 'complete-discography']))
                    ->add('audio', route('music', ['page' => 'audio']))
                    ->add('scrapbook', route('music', ['page' => 'scrapbook']))
                    ->add('bass player', route('music', ['page' => 'bass-player']))
                    ->add('producer', route('music', ['page' => 'producer']))
                    ->add('player/producer', route('music', ['page' => 'player-producer']));
            })
            ->add('in between', route('in-between'));
    }

    public function index()
    {
        return view('pages.home', ['nav' => $this->nav]);
    }

    public function web(string $page = 'index')
    {
        return view("pages.web.{$page}", ['nav' => $this->nav]);
    }

    public function music(string $page = 'index')
    {
        return view("pages.music.{$page}", ['nav' => $this->nav]);
    }

    public function inBetween(string $page = 'index')
    {
        return view("pages.in-between.{$page}", ['nav' => $this->nav]);
    }
}
