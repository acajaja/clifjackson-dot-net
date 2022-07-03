@php
use Spatie\Navigation\Navigation;
use Spatie\Navigation\Section;

$nav = app(Navigation::class)
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
    ->add('in between', route('in-between'))
@endphp

<nav id="main-nav">
    <ul id="nav-list">
@foreach ($nav->tree() as $route)
        <li>
            <a class="top-level-link{{ $route['active'] ? ' active' : '' }}" href="{{ $route['url'] }}" title="{{ $route['title'] }}">{{ $route['title'] }}</a>

            @if ($route['children'])
            <ul class="child-menu">
                @foreach ($route['children'] as $childRoute)
                <li>
                    <a class="child-link{{ $childRoute['active'] ? ' active' : '' }}" href="{{ $childRoute['url'] }}" title="{{ $childRoute['title'] }}">{{ $childRoute['title'] }}</a>
                </li>
                @endforeach
            </ul>
            @endif
        </li>
@endforeach
    </ul>
</nav>
