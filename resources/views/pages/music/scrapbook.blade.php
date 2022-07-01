@extends('layouts.layout')
@section('title', 'scrapbook')
@push('styles')
<link href="{{ asset('css/gallery-A.css') }}" rel="stylesheet" type="text/css">
@endpush
@push('body-scripts')
<script src="{{ asset('/js/scrapbook.js') }}" type="text/javascript"></script>
@endpush

@section('content')
<div class="page-wrap">
    <h1>My Scrapbook</h1>
    <p>
        <em>(in chronological order)</em>
    </p>

    <section class="content-entry-box" id="moogfest2017">
        <div>
            <h2>Moogfest 2017</h2>
            <p>
                <img alt="Sounds of Commerce" class="image-left-25" src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/TSOC-Logo-150w.jpg">
                While working at Bronto I had a volunteer opportunity to co-lead the "Sounds Of Commerce"
                installation &mdash; a concept project to turn some of our tracking data
                in to music via MIDI.
                <span class="clear"></span>
                <!-- I wrote a blog post about that so I won't go into details here:<br>
                <a href="http://blog.bronto.com/engineering/the-making-of-moogfest-2017-how-bronto-transformed-data-into-music/" title="The Making of Moogfest 2017: How Bronto Transformed Data Into Sounds">http://blog.bronto.com/engineering/the-making-of-moogfest-2017-how-bronto-transformed-data-into-music/</a> -->
            </p>
            <p>
                What I <em>would</em> like to mention about it is how fun it was, what a great
                learning experience it was, and that I got to work with some really bright people
                who helped a lot with various aspects of the project! I may publish a YouTube video
                about how I designed and built the MIDI controllers seen below in the pictures.
            </p>
            <p>
                I took raw, anonymized tracking data and turned it into a variety of MIDI files.
                I handed that to my partner who then used Ableton Live to orchestrate an interactive
                audio-visual experience that people ended up having a lot of fun with!
            </p>
            <!-- <p>
                Additional links:<br>
                <a href="http://blog.bronto.com/brontonation/sounds-commerce-smash-hit-moogfest/" target="_blank" title="The Sounds of Commerce Is a Smash Hit at Moogfest">http://blog.bronto.com/brontonation/sounds-commerce-smash-hit-moogfest/</a><br>
                <a href="http://blog.bronto.com/news/moogfest-display-transforms-commerce-data/" target="_blank" title="Moogfest Display Transforms Commerce Data Into Sight and Sound">http://blog.bronto.com/news/moogfest-display-transforms-commerce-data/</a>
            </p> -->
            <div id="moog-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/Drum-Machine-Idea-740w.jpg" title="Drum Machine Concept">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/Drum-Machine-Idea-150sq.jpg" alt="Drum Machine Concept">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/Controller-2-740w.gif" title="MIDI Controller Cutting Template">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/Controller-2-150sq.gif" alt="MIDI Controller Cutting Template">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/5-10-2017-circuit-prototype-1-740w.jpg" title="Breadboard prototype">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/5-10-2017-circuit-prototype-1-150sq.jpg" alt="Breadboard prototype">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/MIDI-Controllers-1-740w.jpg" title="Finished MIDI Controllers">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/MIDI-Controllers-1-150sq.jpg" alt="Finished MIDI Controllers">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/SoC-crowd-1-740w.jpg" title="SoC Crowd">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/SoC-crowd-1-150sq.jpg" alt="SoC Crowd">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/SoC-moog-fest-2017/action-1.jpg" title="Participant">
                    <img src="http://media.clifjackson.net/images/SoC-moog-fest-2017/thumbs/action-1-150sq.jpg" alt="Participant">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box" id="secret_orchestra">
        <div>
            <h2>Secret Orchestra</h2>
            <p>
                <img alt="" class="image-left-25" src="http://media.clifjackson.net/images/secret-orchestra/IMG_2931-FIX1-280sq.jpg">
                <!--Check out our
                <a href="http://roulettenyc.wordpress.com/2010/10/15/interview-with-secret-orchestra/" title="Roulette Interview">interview with Roulette</a>!
                <br><br>-->
                Secret Orchestra is an original music group I started in 2007 after the trio had already played together
                as a rhythm section in various other projects. It became apparent that we had a connection and shared
                some similar musical ideas. However, we also brought our very different backgrounds into the mix creating
                a strong dynamic and a wide spectrum of musical space to play in. Although I am the “leader” of the group
                and write a lot of the music, I am the youngest member and sometimes defer to the knowledge and experience
                of my elder band mates. Yuko contributes original compositions, as well, and we all contribute to
                arrangements and aesthetics when appropriate. Furthermore, improvisation is at the center of their music,
                leaving all of us open to create our own parts or to work within the composer's guidelines. Through a mix
                of composition and improvisation the overall musical aesthetic is grounded in a sense of direction and an
                exploration of colors, textures, silence, and rhythmic and melodic structures.
                <br><br>
                One of our strongest ideas is to stay true to the spirit of any given piece, whether composed or
                improvised. Furthermore, we try to avoid sounding the same from piece to piece and strive to push the
                boundaries of accepted “avant-garde” techniques, while still using those same techniques as a foundation
                or starting point. In a time where profitability trumps creativity in the music business, Secret Orchestra
                works hard to develop a unique and identifiable sound.
            </p>
            <div class="responsive-iframe-container responsive-iframe-container-16x9">
                <iframe src="https://www.youtube.com/embed/videoseries?list=PL2AE6E96BA2DAB1CF" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <section class="content-entry-box" id="spontaneous_river">
        <div>
            <h2>Spontaneous River</h2>
            <p>
                A wonderful group conceived and lead by <a href="http://jasonkaohwang.com/spontaneous-river" target="_blank" title="Jason Kao Hwang / Spontaneous River">Jason Kao Hwang</a>. Known as "conduction", Spontaneous River is a blend of composition and improvisation where various bits of composed music are woven together spontaneously by the conductor (Jason). Consequently, every performance is a little different. It was both an honor and a pleasure to be asked to be a player for the recording and performances of Jason's music. Jason is a veteran of the creative music scene in NYC and you have probably heard some of his music as he has written soundtracks for a wide variety of television, advertising and film over the past 30 years.
            </p>
            <p>
                Moreover, I also had the honor of playing alongside of some luminaries of the Jazz world, most notably <a href="http://www.henrygrimes.com/" target="_blank" title="Henry Grimes">Henry Grimes</a>. Be sure to check out the footage of the recording session for the album on YouTube:
                <br>
                <a href="http://www.youtube.com/watch?v=iKch6kft2ZY" target="_blank" title="YouTube">http://www.youtube.com/watch?v=iKch6kft2ZY</a>.
                <br>
                Reviews are <a href="http://www.jasonkaohwang.com/spontaneous-river-reviews" target="_blank" title="More Spontaneous River reviews">here</a>.
            </p>
            <p>
                Performance photos are from <a href="http://www.galapagosdetroit.com/" target="_blank" title="Galapagos Art Space">Galapagos Art Space</a> (formerly of Brooklyn, NY).
            </p>
            <div id="river-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Galapagos-1.jpg" title="Performance Photo 1">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Galapagos-1-150sq.jpg" alt="Performance Photo 1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Galapagos-2.jpg" title="Performance Photo 2">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Galapagos-2-150sq.jpg" alt="Performance Photo 2">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Galapagos-3.jpg" title="Performance Photo 3">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Galapagos-3-150sq.jpg" alt="Performance Photo 3">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Galapagos-4.jpg" title="Performance Photo 4">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Galapagos-4-150sq.jpg" alt="Performance Photo 4">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Galapagos-5.jpg" title="Performance Photo 5">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Galapagos-5-150sq.jpg" alt="Performance Photo 5">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/spontaneous-river/Recording-Session-1.jpg" title="Recording Session">
                    <img src="http://media.clifjackson.net/images/spontaneous-river/thumbs/Recording-Session-1-150sq.jpg" alt="Recording Session">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box" id="vf2007">
        <div>
            <h2>Vision Festival XII (2007)</h2>
            <p>
                The organizers could not find 50 actual violins. So they filled the space with basses and cellos. Not only was I able to be directed by Billy Bang, but I got to work with a lot of great NYC musicians including Reggie Workman, Ken Filliano, Jason Hwang, Ruben Radding and many more!
            </p>
            <p>
                Unfortunately, the occassion was celebrating the passing of the great Leroy Jenkins. We played Billy Bang's arrangement of Leroy's classic <em>New York</em>.
            </p>
            <p>
                <img alt="50 String for Leroy" class="img-100" src="http://media.clifjackson.net/images/vision07/strings_for_LJ-640.jpg">
            </p>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Bobby Previte's Voodoo Orchestra West</h2>

            <p>One night only!</p>
            <p>
                May 6, 2002 at the Tralfamadore Cafe - Buffalo, NY
            </p>
            <p>
                Bobby came in as an artist in residence at Hallwalls Contemporary Arts Center to do his arrangements of select
                tracks from Miles Davis's <em>Bitches Brew</em> and <em>In A Silent Way</em>. I was fortunate to have been chosen
                as one of two bass players.
            </p>
            <p>
                Other performers were John Bacon - drums/percussion, Greg Piontek - electric bass, Mike Wagner - fender rhodes,
                Joe Rozler - keys & theramin, Ringo Brill - percussion, Mike Allard - alto sax, Ron LoCurto - guitar,
                Geoffery Fitzhugh Perry - electric violin, Steve Baczkowski - baritone sax
            </p>
            <p>
                Various press clippings and photos.
            </p>

            <div id="voodoo-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/Brew_Poster_319x500.jpg" title="Promo Poster">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/Brew_Poster_319x500.jpg" alt="Promo Poster">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/BrewPR1bb_500x339.gif" title="Press Photo 1">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/BrewPR1bb_500x339.jpg" alt="Press Photo 1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/BrewPR2bb_314x500.gif" title="Press Coverage 1">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/BrewPR2bb_314x500.gif" alt="Press Coverage 1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/BrewPR3_558x500.jpg" title="Press Photo 2">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/BrewPR3_558x500.jpg" alt="Press Photo 2">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/BrewReviewA_394x400.gif" title="Press Coverage 2">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/BrewReviewA_394x400.gif" alt="Press Coverage 2">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/brew/BrewReviewB_400x786.gif" title="Press Coverage 3">
                    <img src="http://media.clifjackson.net/images/brew/thumbs/BrewReviewB_400x786.gif" alt="Press Coverage 3">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Elavation</h2>
            <p>
                Elavation was a creation of Brian Wantuch, Clinton Ours and Ben Levitt. I joined the band later on and we played together
                for about two years. We had fun and played some great gigs. We played a variety of original and cover material and were
                basically a party band. We liked high energy, tight grooves and played a lot of funk and R&B.
            </p>

            <div id="ela-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/003_3A-640.jpg" title="Elavation @ Central Park Grill. Buffalo, NY-1">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/003_3A-62sq.jpg" alt="Elavation @ Central Park Grill. Buffalo, NY-1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/017_31A-640.jpg" title="Elavation @ Emergenza Fest. Buffalo, NY-1">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/017_31A-62sq.jpg" alt="Elavation @ Emergenza Fest. Buffalo, NY-1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/020_20A-640.jpg" title="Elavation @ Central Park Grill. Buffalo, NY-2">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/020_20A-62sq.jpg" alt="Elavation @ Central Park Grill. Buffalo, NY-2">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/034_9-640.jpg" title="Elavation @ Emergenza Fest. Buffalo, NY-2">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/034_9-62sq.jpg" alt="Elavation @ Emergenza Fest. Buffalo, NY-2">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Billboard-640.jpg" title="Billboard CD Release">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Billboard-62sq.jpg" alt="Billboard CD Release">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Elavation_Diablo_321.gif" title="Club Diablo Performance Clipping from The Buffalo News">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Elavation_Diablo_321-62sq.gif" alt="Club Diablo Performance Clipping from The Buffalo News">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Elavation_Summer_2002.jpg" title="Elavation @ The Elmwood Art Festival 2002">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Elavation_Summer_2002-62sq.jpg" alt="Elavation @ The Elmwood Art Festival 2002">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Elavation-007-640.jpg" title="Group shot 1">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Elavation-007-62sq.jpg" alt="Group shot 1">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Elavation049_webA.jpg" title="Group shot 1 for web">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Elavation049_webA-62sq.jpg" alt="Group shot 1 for web">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Emergenza_B-640.jpg" title="Elavation @ Emergenza Fest. Buffalo, NY-3">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Emergenza_B-62sq.jpg" alt="Elavation @ Emergenza Fest. Buffalo, NY-3">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Emergenza_F-640.jpg" title="Elavation @ Emergenza Fest. Buffalo, NY-4">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Emergenza_F-62sq.jpg" alt="Elavation @ Emergenza Fest. Buffalo, NY-4">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/NeitA-640.jpg" title="Elavation @ Neitzsche's. Buffalo, NY">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/NeitA-62sq.jpg" alt="Elavation @ Neitzsche's. Buffalo, NY">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Nightlife_Article-640.gif" title="Elavation Review in Nightlife">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Nightlife_Article-62sq.gif" alt="Elavation Review in Nightlife">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/elavation/Sticker_Big-640.jpg" title="Elavation Promo Sticker">
                    <img src="http://media.clifjackson.net/images/elavation/thumbs/Sticker_Big-62sq.jpg" alt="Elavation Promo Sticker">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Eulipion</h2>

            <p>
                Eulipion was a phenomenon and brainchild of mutli-instrumentalist Steve Baczkowski. I joined the band after they had
                already been playing around for a while. As groups go sometimes, a lot of young buffalo musicians came through and
                shared in the experience of Eulipion.
            </p>
            <p>
                I was in the group for almost 2 years and we had a weekly resndency at Tim's Rendzvous in Buffalo, NY on Wednesday
                nights. We played that for about 1 1/2 years and really developed a strong following.
            </p>
            <p>
                Of course we did some other shows as well which you can see below. We also backed up Bobby Previte and his Voodoo
                Orchestra West.
            </p>

            <div id="eulip-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/eulipion/Eulip_EJF_646w.gif" title="Ellicottville Jazz Fest. Announcements">
                    <img src="http://media.clifjackson.net/images/eulipion/thumbs/Eulip_EJF_62sq.gif" alt="Ellicottville Jazz Fest. Announcements">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/eulipion/EulipA_592x500.gif" title="Buffalo News Group Shot">
                    <img src="http://media.clifjackson.net/images/eulipion/thumbs/EulipA_62sq.jpg" alt="Buffalo News Group Shot">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/eulipion/EulipPR1bb_658x500.gif" title="Buffalo News Group Shot @ Tralf, Buffalo, NY">
                    <img src="http://media.clifjackson.net/images/eulipion/thumbs/EulipPR1bb_62sq.jpg" alt="Buffalo News Group Shot @ Tralf, Buffalo, NY">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/eulipion/EulipPr2_493x500.gif" title="Special Effects Announcement">
                    <img src="http://media.clifjackson.net/images/eulipion/thumbs/EulipPr2_62sq.gif" alt="Special Effects Announcement">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Jazzopetry :: Spoken Word - Live Music</h2>

            <p>
                Jazzopetry is a community-oriented Spoken Word and Live Music event that I co-created with my partner Erica Williamson. I expressed the musical side, while Ms. Williamson expressed the poetic side. The main idea of the event was to challenge the poetic and musical communities to come out and share their works in a new and spontaneous way, or just free-style.
            </p>
            <p>
                As poetry slams became more popular, we began hearing from some poets that they felt like some of the fun was taken out of the slam because of the competitiveness. We wanted to offer an alternative event that was open to the community and directly involved them.
            </p>
            <p>
                Consequently, we created an event where poets and musicians (and later on, dancers) could come and just have some fun, but still maintain a "show" type of atmosphere. The mic was always open and what we did was improvise music to people's poetry. Sometimes it worked and sometimes it didn't. But despite what some people thought, that itself was the point.
            </p>
            <p>
                Jazzopetry was a multi-fold project with many goals. In addition to the community involvement and interaction, we also wanted to show people that, despite a variety of cultural and ethinc backgrounds, we could still come together and just have fun!
            </p>

            <div id="opetry-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO_EFOA_227x580.gif" title="JO - Elmwood FOA Schedule">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO_EFOA_62sq.gif" alt="JO - Elmwood FOA Schedule">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO_Hllween_580x380.gif" title="JO - Halloween LHI">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO_Hllween_62sq.gif" alt="JO - Halloween LHI">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO1_353x498.jpg" title="JO - JO1 Promo">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO1_62sq.jpg" alt="JO - JO1 Promo">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO1_PR1_580x434.gif" title="JO - JO1 Listing">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO1_PR1_62sq.gif" alt="JO - JO1 Listing">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO8ab_245x300.gif" title="JO - JO8 Listing">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO8ab_62sq.gif" alt="JO - JO8 Listing">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO9ab_459x200.gif" title="JO - JO9 Listing">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO9ab_62sq.gif" alt="JO - JO9 Listing">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/JO/JO11ab_454x200.gif" title="JO - JO11 Listing">
                    <img src="http://media.clifjackson.net/images/JO/thumbs/JO11ab_62sq.gif" alt="JO - JO11 Listing">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>1975: An Underground Epic. A thin line between poetry and hip-hop.</h2>
            <p>
                In May and June of 2002 I played bass for 12 performances of Aqiyl Thomas' play <em>1975: An Underground Epic; A thin line bewteen poetry and hip-hop</em>
            </p>
            <p>
                We did performances in Woodstock, NY at the Bearsville Theater and in Buffalo, NY at the Kavinoky Theater. I was commissioned to write 1 piece for the play.
            </p>
            <p>
                Check out some press clips:
                <em>(there's actuallty a mis-print in the review saying that I was in the The Waz. Although I did play with David a while back I was never actually in the band. If you're at all intimately familiar with The Waz and know who the REAL bass player was, it's actually pretty funny and was the "talk of the scene" for a bit.)</em>
            </p>

            <div id="epic-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/1975/1975_Cover_240wx320.jpg" title="Program Cover">
                    <img src="http://media.clifjackson.net/images/1975/thumbs/1975_Cover_62sq.jpg" alt="Program Cover">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/1975/1975_Excerpt1_424x500.gif" title="Program Excerpt">
                    <img src="http://media.clifjackson.net/images/1975/thumbs/1975_Excerpt1_62sq.gif" alt="Program Excerpt">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Misc. Scraps</h2>
            <p>
                These are random clippings and other such memorabilia from a variety of performances and/or productions I have had the great fortune to be a part of over the years.
            </p>

            <div id="misc-gall" class="thumbnail-gallery">
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/dinahwas_268x500.jpg" title="Dinah Was Article">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/dinahwas_268x500.jpg" alt="Dinah Was Article">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/IMG_0146-SabirM-sm1.jpg" title="Sabir Mateen Band @ Brecht Forum">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/IMG_0146-SabirM-sm1.jpg" alt="Sabir Mateen Band @ Brecht Forum">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/LeMetroPR_370x500.gif" title="Le Metro Review from Artifackt">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/LeMetroPR_370x500.gif" alt="Le Metro Review from Artifackt">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/MIA2004Patch_363x500.jpg" title="Artist Patch from 2004 Festival">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/MIA2004Patch_363x500.jpg" alt="Artist Patch from 2004 Festival">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/MIA2005Patch_358x500.jpg" title="Artist Patch from 2005 Festival">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/MIA2005Patch_358x500.jpg" alt="Artist Patch from 2005 Festival">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/MPRa_720x500.gif" title="Buffalo News Performance Announcement">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/MPRa_720x500.gif" alt="Buffalo News Performance Announcement">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/rionegro1_383x500.jpg" title="Artists and Models Flyer">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/rionegro1_383x500.jpg" alt="Artists and Models Flyer">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/RioNegro1B_298x500.gif" title="Hop & Bean Music Festival Clipping">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/RioNegro1B_298x500.jpg" alt="Hop & Bean Music Festival Clipping">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/RLTrio1_600x138.gif" title="Ron LoCurto Trio Rendezvous Announcement">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/RLTrio1_600x138.gif" alt="Ron LoCurto Trio Rendezvous Announcement">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/Round_Robin_600x193.gif" title="Buffalo News Performance Announcement">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/Round_Robin_600x193.gif" alt="Buffalo News Performance Announcement">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/Soto_373x500.jpg" title="Certificate of Appreciation from Leandro Soto">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/Soto_373x500.jpg" alt="Certificate of Appreciation from Leandro Soto">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/Toronto03A.jpg" title="Photo from Sneaky Dee's w/ Robinson & Momin">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/Toronto03A.jpg" alt="Photo from Sneaky Dee's w/ Robinson & Momin">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/w_JoeFord_640.jpg" title="Buffalo News Review of Joe Ford Performance">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/w_JoeFord_640.jpg" alt="Buffalo News Review of Joe Ford Performance">
                </a>
                <a class="thumb-link" href="http://media.clifjackson.net/images/misc-press/Zuk_Demo_Rev-640.jpg" title="Artvoice Review of Zuk Demo">
                    <img src="http://media.clifjackson.net/images/misc-press/thumbs/Zuk_Demo_Rev-640.jpg" alt="Artvoice Review of Zuk Demo">
                </a>
            </div>
        </div>
    </section>

    <section class="content-entry-box">
        <div>
            <h2>Other Performances</h2>
            <div class="responsive-iframe-container responsive-iframe-container-16x9">
                <iframe src="https://www.youtube.com/embed/videoseries?list=PLA2F4B56F63D43CDE" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</div>
@endsection
