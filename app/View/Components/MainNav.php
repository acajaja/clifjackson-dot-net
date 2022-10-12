<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Spatie\Navigation\Navigation;
use Spatie\Navigation\Section;

class MainNav extends Component
{
    public Navigation $nav;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->nav = app(Navigation::class)
            ->add('home', route('home'))
            ->add('web', route('web-index'), function (Section $section) {
                $section->add('work samples', route('work-samples-index'))
                    ->add('geeking out', route('geeking-out'));
            })
            ->add('music', '/music', function (Section $section) {
                $section->add('discography', route('discography'))
                    ->add('audio', route('audio'))
                    ->add('scrapbook', route('scrapbook'))
                    ->add('bass player', route('bass-player'))
                    ->add('producer', route('producer'))
                    ->add('player/producer', route('player-producer'));
            })
            ->add('in between', route('in-between'));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.main-nav');
    }
}
