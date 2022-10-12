@extends('layouts.page')
@section('title', 'geeking out')
@push('styles')
<link href="{{ asset('css/general.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
    <section>
        <h1>Geeking Out</h1>
        <div class="content-entry-box-A">
            <div>
                <h2>Git Hooks</h2>
                <p>
                    In a team development environment it usually becomes necessary to put some sanity checks in place because
                    multiple people are contributing code. A Git pre-commit hook can go a long way to help keep things clean
                    and orderly. I've developed a pre-commit hook that looks at the staged files and:

                    <ul>
                        <li>Runs unit tests</li>
                        <li>Runs the PHP linter</li>
                        <li>Runs the PHP Code Sniffer</li>
                        <li>Runs the PHP Code Sniffer Fixer if it finds fixable errors</li>
                        <li>Runs the PHP Compatibility check against the specified version</li>
                    </ul>
                </p>
                <p>
                    See my GitHub <span class="octicon octicon-mark-github"></span> <a href="https://github.com/acajaja/Git_Scripts" target="_blank" title="Git Scripts">repo</a> for the code.
                </p>
            </div>
        </div>

        <section class="content-entry-box-A">
            <div>
                <h2>Git Automation</h2>
                <p>
                    If you use Git a lot and find yourself doing the same things over an over, then a script can help save time and typing. Feel free to copy/paste
                    my code to automate certain repetitive tasks like managing stashes and committing and merging. I prefix my Git commands with 'gt' and then some kind of
                    shorthand for a command.
                </p>
                <p>
                    See my GitHub <span class="octicon octicon-mark-github"></span> <a href="https://github.com/acajaja/Git_Scripts" target="_blank" title="Git Scripts">repo</a> for the code.
                </p>
            </div>
        </section>

        <section class="content-entry-box-A">
            <div>
                <h2>Web Stuff</h2>

                <p>A cross-platform way to avoid phone numbers, email addresses, dates, etc from displaying as links:</p>
                <p>Break up the pattern with &lt;span&gt; tags.</p>
                <p>
                    raw numbers: 123-456-7890
                    <br>
                    mark up: &lt;span&gt;1&lt;/span&gt;2&lt;span&gt;3-&lt;/span&gt;45&lt;span&gt;6-7&lt;/span&gt;8&lt;span&gt;90&lt;/span&gt;
                    <br>
                    rendered: <span>1</span>2<span>3-</span>45<span>6-7</span>8<span>90</span>
                </p>
                <p>
                    Of course, you can also use the iOS specific way of using a &lt;meta&gt; tag:
                    <br><br>
                    &lt;meta name="format-detection" content="telephone=no"&gt;
                </p>
            </div>
        </section>
    </section>
@endsection
