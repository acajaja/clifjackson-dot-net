@extends('layouts.layout')
@section('title', 'work samples')
@push('styles')
<link href="{{ asset('css/general.css') }}" rel="stylesheet" type="text/css">
@endpush

@section('content')
<section class="page-wrap">
    <h1>Browse some of my work samples.</h1>
    <div id="disco-entries">
        <p>
            <a href="https://www.zend-zce.com/en/yellow-pages/ZEND027688" target="_blank" title="Zend Yellow Pages"><img alt="Zend Certified PHP Engineer" class="image-left-25" src="http://media.clifjackson.net/images/logos/zend-certified-php-Engineer-150x140.png"></a>Below is a small sample of work I have done over the years. Of course, some of the work I
            have done cannot be publicly shared because of non-disclosure agreements. I worked in the NYC agency world since 2006 in
            addition to freelancing since about 2001. I have built web applications both big and small and integrated all kinds of 3<sup>rd</sup> party services.
        </p>
        <div style="width: 10vw; height: auto; margin: 0 auto;">
            <ul>
                <li><a href="#experiments" title="Experiments">Experiments</a></li>
                <li><a href="#past-projects" title="Past Projects">Past Projects</a></li>
            </ul>
        </div>
        <p>
            I recently completed a project with a local company that works with the National Institutes of Health. They have some legacy
            Cold Fusion applications that they wanted to port over to PHP using Laravel for the front-end and Lumen for a database
            service API (Oracle DB). I also leveraged Laravel's job queue functionality to offload some asynchronous tasks using SQLite 
            database for the queue. I created pages that used an existing and extensive Blade template library for consistent UI elements.
            The database service used Remote Procedure Calls to interact with the database via a client that used
            <a href="http://docs.guzzlephp.org/en/stable/index.html" target="_blank" title="Guzzle HTTP Client">Guzzle</a> as the underlying HTTP client.
            The database service used both raw SQL and Eloquent models for various read and write operations.
        </p>
        <blockquote>
            You've been a huge addition to our team this year. For the past few months, your flexibility has delivered an INSANE amount of value to our customers.
            <br>
            ...
            <br>
            I love the way you handle each problem by looking at it through the customer's eyes, seeing their pain points, understanding what they want before typing anything.
            <br><br>
            <span class="quote-src">-- former Oracle Netsuite manager (excerpted from hand-written letter to me)</span>
        </blockquote>
        <p>
            I started as a PHP team developer at Bronto (now Oracle Netsuite) just before the Netsuite acquisition in 2015 and was part of a 4 person team.
            When Oracle purchased Netsuite in 2016, I became a 1-man team. At that point, I had basically been running the day-to-day operations
            of the legacy PHP code. I was tasked with additional responsibilities like being on-call and handling Puppet changes. I also shared the responsibility for deploying the PHP code to production but, otherwise, had been handling most of the bug
            fixes, improvements, feature requests, security fixes, Customer Service cases. I also lead the initiative in finalizing the upgrade to PHP 5.6 (had been a W.I.P. for some time before me) and initiated the migration to PHP 7.
        </p>
        <blockquote>
            Clifton's biggest strength was his approach to problem solving, developing solutions, and executing those solutions.
            <br>
            <span class="quote-src">-- former Oracle Netsuite manager</span>
        </blockquote>
        <p>
            Before Bronto I worked for 2 years at Havas HPS, mainly as their lead HTML email developer for AT&T, but also doing other pharma-related
            work as well. In regards to the AT&T work, there were key areas with the email service provider they had
            partnered with that were not well understood and I led the initiative in setting up meetings to clear that up. Once we had sat down with them
            and talked about their process and how we could better work with them, a lot of crucial information was gleaned that helped us streamline our end.
            Because AT&T's business logic for their email campaigns can be very dense and detailed, I wrote a PHP library that helped to dynamically assemble
            a given campaign according to their segmentation logic, markets, etc. This enabled us to drastically increase our productivity and turn-around time
            as any 1 email could have potentially over 100 permutations.
        </p>
        <blockquote>
            Clifton turned around a struggling team and would be a great addition to any team. He can contribute to any team in a fast-paced, challenging environment.
            <br>
            <span class="quote-src">-- former Havas manager</span>
        </blockquote>
        <p>
            Prior to that, while working at Organic, Inc., I was the lead developer on the www.pepsi.com web site for most of 2012. This was the first iteration of their
            #NOW campaign, however, the site has since been completely re-done. I was tasked with
            saving an existing code base that had some serious problems. The site was built on a LAMP stack using Symfony 1.1 and needed a lot of database
            optimizations and code re-factoring (PHP, CSS, HTML, and JavaScript). I lead a team of 3 to maintain and update the site while rewriting key parts of the application.
        </p>
        <p>
            While at Organic, Inc. I also built a variety of Facebook apps for major companies like Pur, Eukanuba Europe and UK and Style United. I also helped
            to build web sites for Bank of America, Specialized and AT&T.
        </p>
        <p>
            I have also worked quite a bit in the pharmaceutical biz and built a lot of iPad applications using Sales Force and iRep.
            This is usually front-end work but sometimes requires some session stuff and/or using iRep's internal database. This work
            includes a lot of chart animations from simple to complex, layouts and UI stuff. I like working on these because there's only
            1 platform which allows you to leverage the full range of CSS3 & HTML5 capabilities without worrying about compatibility!
        </p>
        <p>
            More detailed work, code samples, information and references are available upon request.
        </p>
        <p>
            Check me out on <span class="octicon octicon-mark-github"></span> <a href="https://github.com/acajaja" target="_blank" title="github.com">github.com</a>.
        </p>

        <a name="experiments"></a>
        <p><br></p>
        
        <section>
            <h2>Experiments</h2>
            <section class="content-entry-box">
                <div>
                    <div class="media-box-150">
                        <a class="samples-image-link" href="{{ route('canvas-app') }}" title="HTML5 Canvas Sample 1"><img alt="" src="http://media.clifjackson.net/images/canvas-sample.jpg"></a>
                    </div>
                    <div class="content-entry-info-box">
                        <h3>
                            <a href="{{ route('canvas-app') }}" title="HTML5 Canvas Sample 1">HTML5 Canvas Sample 1</a>
                        </h3>
                        <p>
                            This was a proof of concept for a major international art gallery using the HTML5 canvas, jQuery and
                            <a href="http://arborjs.org" target="_blank" title="arbor.js">arbor.js</a> (particle physics engine).
                            The idea is that all the pictures are attached to one long string and you can drag them around and the
                            others will follow. You can also click them to go to another page. This was not optimized for touch devices.
                        </p>
                    </div>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="{{ route('interactive-map') }}" title="Interactive Map"><img alt="" src="http://media.clifjackson.net/images/interactive-map-sample.png"></a>
                </div>
                <div class="content-entry-info-box">
                    <h3>
                        <a href="{{ route('interactive-map') }}" title="Interactive Map">Interactive Map</a>
                    </h3>
                    <p>
                        This was an interactive map tab for a major pet food brand's Facebook page. Hover over highlighted countries for
                        more info. Built using jQuery,
                        <a href="http://raphaeljs.com/" target="_blank" title="raphael.js">raphael.js</a> and the Qtip jQuery plugin to generate an SVG map based on actual
                        global coordinates. Also renders appropriate code for pre-IE 9 versions of IE.
                    </p>
                </div>
            </section>
        </section>

        <a name="past-projects"></a>
        <p><br></p>

        <section>
            <h2>Past Projects</h2>
            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="Oracle Netsuite" src="/media/images/logos/O-NetSuite_badge.svg">
                </div>
                <div class="content-entry-info-box">
                    <h3>Oracle Netsuite - Bronto Marketing Platform</h3>
                    <p>
                        Simply 'Bronto' when I started there, I worked in the legacy PHP code base for the platform doing bug fixes, customer cases, and new features.
                    </p>
                    <p>
                        Other duties included CSS, HTML and JavaScript, code deployment, Continuous Integration via GitLab, Puppet configuration,
                        PHP upgrades, and CDN integration (CloudFlare and Akamai).
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="" src="http://media.clifjackson.net/images/havas/ATT-Email1-150w.png">
                </div>
                <div class="content-entry-info-box">
                    <h3>Havas HPS<sup>1</sup></h3>
                    <p>
                        A sample of an HTML email I developed for AT&T. It is fully responsive. Please ask to see it in action.
                    </p>
                    <p>
                        I also wrote a PHP library that helped to dynamically assemble a given campaign according to their segmentation logic, markets, etc. This enabled us to drastically increase our productivity and turn-around time as any 1 email could have potentially over 100 permutations.
                    </p>
                    <p>
                        <small><em>1. The name of this agency has changed quite a few times over the years.</em></small>
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.speakup.com/" target="_blank" title="Speak Up"><img alt="" src="http://media.clifjackson.net/images/speakup-thumb-150sq.jpg"></a>
                </div>
                <div class="content-entry-info-box">
                    <h3>Speak Up!</h3>
                    <p>
                        <a class="bold-link" href="http://www.speakup.com/" target="_blank" title="Speak Up">speakup.com <i class="fas fa-external-link-alt"></i></a>
                    </p>
                    <p>
                        The <a href="http://www.cpyv.org/" target="_blank" title="Center to Prevent Youth Violence">Center to Prevent Youth Violence</a> wanted
                        to create a new site for their latest campaign encouraging young people to speak up about gun violence. I led them
                        from concept to launch and worked with their existing hosting service. The home page has since been changed by another party. The rest of
                        the site is still my work. The site uses Dojo JavaScript tools and Videos JS as well as components of the Zend Framework for form handling.
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="" src="http://media.clifjackson.net/images/AFA-theme-homepage.png">
                </div>
                <div class="content-entry-info-box">
                    <h3>Arts For Art, Inc.*</h3>
                    <p>
                        A long time NYC arts organization featuring music, dance, spoken word and other great performances. I worked
                        in conjunction with the Executive Director and a graphic designer to produce this site, which runs on a CMS
                        and Zend Framework. The site also uses my HTML5 audio player, Video JS, and incorporates both the Twitter and
                        Facebook API's for social sharing. I chose the Dojo JavaScript library for the front-end.
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="" src="http://media.clifjackson.net/images/hyatt-womens-sample.jpg">
                </div>
                <div class="content-entry-info-box">
                    <h3>Hyatt Experience*</h3>
                    <p>I assisted in enabling a responsive design in the existing page and was responsible for the mobile and tablet versions (iOS, Android).</p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="" src="http://media.clifjackson.net/images/awards-meter-sample.png">
                </div>
                <div class="content-entry-info-box">
                    <h3>Awards Meter*</h3>
                    <p>
                        I assisted in debugging and cleaning up the code for production, including CSS,
                        JavaScript and HTML5. Also addressed compatibility issues with various browsers and platforms.
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <img alt="" src="http://media.clifjackson.net/images/pur-daily-drop-sample.png">
                </div>
                <div class="content-entry-info-box">
                    <h3>The PUR Daily Drop on Facebook*</h3>
                    <p>
                        I built this entire app (except for the graphic design & Flash pieces) according to the client specifications and
                        using assets (graphics, Flash, etc...) provided. It is meant for users to "donate" 10 liters of water to
                        their cause. Donations are tracked in real-time and the top donors are also listed in real-time (using Facebook's
                        Open Graph API). The application also makes a post to the users wall (which requires a Facebook OAuth gate).
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.secretorchestra.net/" target="_blank" title="Secret Orchestra">
                        <img alt="" src="http://media.clifjackson.net/images/secret-orchestra-sample.png">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>Secret Orchestra</h3>
                    <p>
                        <a class="bold-link" href="http://www.secretorchestra.net/" target="_blank" title="Secret Orchestra">http://secretorchestra.net/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                    <p>I built this entire site, including all graphic design, using HTML5 and CSS3 animations. I also built the HTML5 audio player.</p>
                </div>
            </section>
        </section>

        <section>
            <section class="content-entry-box">
                <h3>Columbia University's Gutenberg-e program (from 2006-7)</h3>
                <p>
                    This is an e-book web site for a program Columbia University runs for publishing first-time authors work. I was responsible for creating a new template for the subsequent releases. This was in 2006 so at the time IE 7 had just come out and we had to solve the compatibility issues that came up for both IE 6 and 7. Moreover, I had to solve unique problems for each book as they all had their own supplemental media. For example, <em>How Taiwan Became Chinese</em> required a Flash application called Zoomify which, for this purpose, was used to view maps of the various regions discussed. Users can zoom in and out of the map and move it around to see details. Many books also used one or more foreign languages including Chinese, German and French.
                </p>
                <p>
                    In addition to designing the template, I also built the conversion tool that would generate clean HTML files from MS Word manuscripts. I also designed some of the e-book covers for those authors that needed one and liked my suggestions. The following are links to the specific e-books I built:
                </p>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.gutenberg-e.org/hodgdon/" target="_blank" title="Manhood in the Age of Aquarius: Masculinity in Two Countercultural Communities, 1965–83">
                        <img alt="" src="http://media.clifjackson.net/images/hogdon-thumb-150sq.jpg">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>Manhood in the Age of Aquarius: Masculinity in Two Countercultural Communities, 1965–83</h3>
                    <p>
                        <a href="http://www.gutenberg-e.org/hodgdon/" target="_blank" title="Manhood in the Age of Aquarius: Masculinity in Two Countercultural Communities, 1965–83">http://www.gutenberg-e.org/hodgdon/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.gutenberg-e.org/andrade/" target="_blank" title="How Taiwan Became Chinese: Dutch, Spanish, and Han Colonization in the Seventeenth Century">
                        <img alt="" src="http://media.clifjackson.net/images/andrade-thumb-150sq.jpg">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>How Taiwan Became Chinese: Dutch, Spanish, and Han Colonization in the Seventeenth Century</h3>
                    <p>
                        <a href="http://www.gutenberg-e.org/andrade/" target="_blank" title="How Taiwan Became Chinese: Dutch, Spanish, and Han Colonization in the Seventeenth Century">http://www.gutenberg-e.org/andrade/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.gutenberg-e.org/lowengard/" target="_blank" title="The Creation of Color in Eighteenth-Century Europe">
                        <img alt="" src="http://media.clifjackson.net/images/lowengard-thumb-150sq.jpg">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>The Creation of Color in Eighteenth-Century Europe</h3>
                    <p>
                        <a href="http://www.gutenberg-e.org/lowengard/" target="_blank" title="The Creation of Color in Eighteenth-Century Europe">http://www.gutenberg-e.org/lowengard/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.gutenberg-e.org/keough/" target="_blank" title="The Slender Thread: Irish Women on the Southern Avalon, 1750-1860">
                        <img alt="" src="http://media.clifjackson.net/images/keough-thumb-150sq.jpg">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>The Slender Thread: Irish Women on the Southern Avalon, 1750-1860</h3>
                    <p>
                        <a href="http://www.gutenberg-e.org/keough/" target="_blank" title="The Slender Thread: Irish Women on the Southern Avalon, 1750-1860">http://www.gutenberg-e.org/keough/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                </div>
            </section>

            <section class="content-entry-box">
                <div class="media-box-150">
                    <a class="samples-image-link" href="http://www.gutenberg-e.org/maclehose/" target="_blank" title="'A Tender Age': Cultural Anxieties over the Child in the Twelfth and Thirteenth Centuries">
                        <img alt="" src="http://media.clifjackson.net/images/maclehose-thumb-150sq.jpg">
                    </a>
                </div>
                <div class="content-entry-info-box">
                    <h3>'A Tender Age': Cultural Anxieties over the Child in the Twelfth and Thirteenth Centuries</h3>
                    <p>
                        <a href="http://www.gutenberg-e.org/maclehose/" target="_blank" title="'A Tender Age': Cultural Anxieties over the Child in the Twelfth and Thirteenth Centuries">http://www.gutenberg-e.org/maclehose/ <i class="fas fa-external-link-alt"></i></a>
                    </p>
                </div>
            </section>

            <div>
                <p>* This site is either no longer active at all or has been since redone.</p>
            </div>
        </section>
    </div>
</section>
@endsection
