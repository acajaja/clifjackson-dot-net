<nav class="clearfix" id="main-nav">
@foreach ($nav->tree() as $route)
    <li>
        <a class="top-level-link{{ $route['active'] ? ' active' : '' }}" href="{{ $route['url'] }}" title="{{ $route['title'] }}">{{ $route['title'] }}</a>

        @if ($route['children'])
        <ul class="child-menu">
            @foreach ($route['children'] as $childRoute)
            <li>
                <a class="child-link{{ $childRoute['active'] ? ' active' : '' }}" href="{{ $childRoute['url'] }}" title="{{ $childRoute['title'] }}">{{ $childRoute['title'] }}</a>
                @if ($childRoute['children'])
                <ul class="child-menu">
                    @foreach ($childRoute['children'] as $childRouteB)
                    <li>
                        <a class="child-link{{ $childRouteB['active'] ? ' active' : '' }}" href="{{ $childRouteB['url'] }}" title="{{ $childRouteB['title'] }}">{{ $childRouteB['title'] }}</a>
                    </li>
                    @endforeach
                </ul>
                @endif
            </li>
            @endforeach
        </ul>
        @endif
    </li>
@endforeach
</nav>