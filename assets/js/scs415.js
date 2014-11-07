var app = angular.module('scs415', []);

app.controller('MainCtrl', function($scope, $http, $compile, $log) {

    $scope.attRows2 = [
        ['rosebroome', 'dougchertok', 'andrewfrey'],
        ['storybellows', 'matthaggman', 'anthonytownsend']
    ];

    $scope.participants = {
        'rosebroome': {
            name: 'Rose Broome',
            avatar: 'rosebroome.png',
            org: 'HandUp',
            role: 'Founder'
        },
        'dougchertok': {
            name: 'Doug Chertok',
            avatar: 'dougchertok.jpg',
            org: 'VastVC',
            role: 'Investor'
        },
        'andrewfrey': {
            name: 'Andrew Frey',
            avatar: 'andrewfrey.jpg',
            org: 'CC Residential',
            role: 'Real Estate Developer'
        },
        'storybellows': {
            name: 'Story Bellows',
            avatar: 'storybellows.jpg',
            org: 'Urban Mechanics',
            role: 'Local Government'
        },
        'matthaggman': {
            name: 'Matt Haggman',
            avatar: 'matthaggman.jpg',
            org: 'Knight Foundation',
            role: 'Philanthropist'
        },
        'anthonytownsend': {
            name: 'Anthony Townsend',
            avatar: 'anthonytownsend.jpg',
            org: 'NYU',
            role: 'Researcher'
        },
    }

    $scope.attRows = [
        ['bmw', 'vastvc', 'omidyar'],
        ['kauffman', 'citymart', 'newurbanmechanics'],
        ['nyu', 'cleanweb', 'livingcities'],
        ['bostonglobalventures', 'hraadvisors', 'codeforamerica'],
        ['ccg', 'miamidade', 'nei'],
        ['publicstuff', 'seeclickfix', 'tumml'],
        ['constant_contact', 'brck', 'architizer'],
        ['birdi', 'dash', 'kairos'],
        ['learnernation', 'neighbor', 'pwrstation'],
        ['rachio', 'seamlessdocs', 'kiwi'],
        ['whatupbridge', 'thetransitapp', 'spravwater'],
        ['cyclehop', 'ccresidential', 'pedleymillin'],
        ['straat', 'miles', 'privateadvising'],
        ['tresmares', 'loveland', 'smartprocure'],
        ['republicbike', 'p3gm', 'urban4m'],
        ['techcocktail', 'refreshmiami', 'trovedata'],
        ['zipcar', 'sobi', 'placemeter'],
        ['greaterplaces', 'opportunityspace', 'weathercloud'],
        ['univision', 'bostonnewtech', 'parkjockey'],
        ['civicinsight', 'nyupt', 'citytrackerx'],
        ['handup']
    ];

    $scope.brands = {
        'privateadvising': {
            url: 'http://http://privateadvising.com/',
            logo: 'pag.jpg',
            logo_width: 240,
            domain: 'privateadvising.com'
        },
        'miles': {
            url: 'http://madeinles.org/',
            logo: 'mileslogo.png',
            logo_width: 140,
            domain: 'madeinles.org'
        },
        'sustainventures': {
            url: 'https://twitter.com/Sustain305',
            logo: 'sustainventures.png',
            logo_width: 140,
            domain: 'sustainventures.com'
        },
        'straat': {
            url: 'http://www.straat.co/',
            logo: 'straat.png',
            logo_width: 140,
            domain: 'straat.co'
        },
        'bmw': {
            url: 'http://www.bmw.com/com/en/insights/corporation/bmwi_ventures/index.html',
            logo: '4bmw_logo.png',
            logo_width: 140,
            domain: 'bmw.com'
        },
        'architizer': {
            url: 'http://www.architizer.com/',
            logo: 'architizer.png',
            logo_width: 240,
            domain: 'architizer.com'
        },
        'brck': {
            url: 'http://www.brck.com/',
            logo: 'brck-logo.png',
            logo_width: 140,
            domain: 'brck.com'
        },
        'dash': {
            url: 'http://www.dash.by/',
            logo: 'dash-logo-web.png',
            logo_width: 140,
            domain: 'dash.by'
        },
        'seamlessdocs': {
            url: 'http://www.seamlessdocs.com/',
            logo: 'seamlessdocs.png',
            logo_width: 240,
            domain: 'seamlessdocs.com'
        },
        'whatupbridge': {
            url: 'http://www.whatupbridge.com/',
            logo: 'wub-logo.png',
            logo_width: 240,
            domain: 'whatupbridge.com',
        },
        'kiwi': {
            url: 'http://www.kiwi.ki/',
            logo: 'kiwiki-logo.png',
            logo_width: 140,
            domain: 'kiwi.ki'
        },
        'vastvc': {
            url: 'http://www.vastvc.com/',
            logo: 'vast-logo.png',
            logo_width: 240,
            domain: 'vastvc.com'
        },
        'kairos': {
            url: 'http://www.kairos.io/',
            logo: 'kairos-logo-blue-trans.png',
            logo_width: 240,
            domain: 'kairos.io'
        },
        'cleanweb': {
            url: 'http://www.cleanweb.co/',
            logo: 'Cleanweblogo_lightbg-176x136.png',
            logo_width: 240,
            domain: 'cleanweb.co'
        },
        'rachio': {
            url: 'http://www.rach.io/',
            logo: 'rachio.jpg',
            logo_width: 240,
            domain: 'rach.io'
        },
        'learnernation': {
            url: 'http://www.learnernation.com/',
            logo: 'leanernation-logo.jpg',
            logo_width: 240,
            domain: 'learnernation.com'
        },
        'citymart': {
            url: 'http://www.citymart.com/',
            logo: 'CityMartLogo.png',
            logo_width: 240,
            domain: 'citymart.com'
        },
        'thetransitapp': {
            url: 'http://www.thetransitapp.com/',
            logo: 'transitapp.png',
            logo_width: 140,
            domain: 'thetransitapp.com'
        },
        'seeclickfix': {
            url: 'http://en.seeclickfix.com/',
            logo: 'scflogo.jpg',
            logo_width: 240,
            domain: 'seeclickfix.com'
        },
        'tumml': {
            url: 'http://tumml.org/',
            logo: 'tumml.png',
            logo_width: 140,
            domain: 'tumml.org'
        },
        'codeformiami': {
            url: 'http://www.codeformiami.org/',
            logo: 'code-for-miami-square-logo.png',
            logo_width: 140,
            domain: 'codeformiami.org'
        },
        'newurbanmechanics': {
            url: 'http://www.newurbanmechanics.org/',
            logo: 'newurbanmechanics.png',
            logo_width: 240,
            domain: 'newurbanmechanics.org'
        },
        'refreshmiami': {
            url: 'http://www.refreshmiami.com/',
            logo: 'refreshmiami.png',
            logo_width: 240,
            domain: 'refreshmiami.com'
        },
        'livingcities': {
            url: 'http://www.livingcities.org/',
            logo: 'livingcities.png',
            logo_width: 140,
            domain: 'livingcities.org'
        },
        'omidyar': {
            url: 'http://www.omidyar.com/',
            logo: 'Omidyar_Network.jpg',
            logo_width: 140,
            domain: 'omidyar.com'
        },
        'miamidade': {
            url: 'http://www.miamidade.gov/',
            logo: 'miami-dade.jpg',
            logo_width: 140,
            domain: 'miamidade.gov'
        },
        'neighbor': {
            url: 'http://www.neighbor.ly/',
            logo: 'neighborly-logo.png',
            logo_width: 240,
            domain: 'neighbor.ly'
        },
        'pwrstation': {
            url: 'http://pwrstation.com/',
            logo: 'pwrstation.png',
            logo_width: 240,
            domain: 'pwrstation.com'
        },
        'publicstuff': {
            url: 'http://publicstuff.com/',
            logo: 'publicstuff-logo.png',
            logo_width: 240,
            domain: 'publicstuff.com'
        },
        'constant_contact': {
            url: 'http://www.constantcontact.com/',
            logo: 'constant_contact_logo.png',
            logo_width: 240,
            domain: 'constantcontact.com'
        },
        'spravwater': {
            url: 'http://www.spravwater.com/',
            logo: 'spravwater.jpg',
            logo_width: 240,
            domain: 'spravwater.com'
        },
        'cyclehop': {
            url: 'http://www.cyclehop.com/',
            logo: 'cyclehop-logo.png',
            logo_width: 240,
            domain: 'cyclehop.com'
        },
        'ccresidential': {
            url: 'http://ccresfl.com/',
            logo: 'ccresidential.png',
            logo_width: 240,
            domain: 'ccresfl.com'
        },
        'pedleymillin': {
            url: 'http://pedleymillin.com/',
            logo: 'pedleymillin.jpg',
            logo_width: 240,
            domain: 'pedleymillin.com'
        },
        'ccg': {
            url: 'http://international.gc.ca/',
            logo: 'ccg.jpg',
            logo_width: 140,
            domain: 'international.gc.ca'
        },
        'nei': {
            url: 'http://neweconomyinitiative.org/',
            logo: 'nei_logo.png',
            logo_width: 240,
            domain: 'neweconomyinitiative.org'
        },
        'birdi': {
            url: 'http://birdi.io/',
            logo: 'birdi-logo.png',
            logo_width: 140,
            domain: 'birdi.io'
        },
        'tresmares': {
            url: '#',
            logo: 'tresmares.jpg',
            logo_width: 140,
            domain: 'Tres Mares Group'
        },
        'loveland': {
            url: 'http://makeloveland.com/',
            logo: 'loveland.png',
            logo_width: 240,
            domain: 'makeloveland.com'
        },
        'smartprocure': {
            url: 'https://smartprocure.us/',
            logo: 'smartprocure.jpg',
            logo_width: 200,
            domain: 'smartprocure.us'
        },
        'republicbike': {
            url: 'http://republicbike.com/',
            logo: 'republicbike.png',
            logo_width: 240,
            domain: 'republicbike.com'
        },
        'nyu': {
            url: 'https://wagner.nyu.edu/rudincenter/',
            logo: 'nyu.jpg',
            logo_width: 140,
            domain: 'wagner.nyu.edu'
        },
        'kauffman': {
            url: 'http://www.kauffman.org/',
            logo: 'kauffman.png',
            logo_width: 240,
            domain: 'kauffman.org'
        },
        'p3gm': {
            url: 'http://www.p3gm.com/',
            logo: 'p3gm.png',
            logo_width: 140,
            domain: 'p3gm.com'
        },
        'hraadvisors': {
            url: 'http://www.hraadvisors.com/',
            logo: 'hraadvisors-logo.png',
            logo_width: 240,
            domain: 'hraadvisors.com'
        },
        'urban4m': {
            url: 'http://www.urban4m.com/',
            logo: 'urban4m.jpg',
            logo_width: 240,
            domain: 'urban4m.com'
        },
        'techcocktail': {
            url: 'http://www.techcocktail.com/',
            logo: 'techcocktail.jpg',
            logo_width: 240,
            domain: 'techcocktail.com'
        },
        'bostonglobalventures': {
            url: 'http://www.bostonglobalventures.com/',
            logo: 'bgv.png',
            logo_width: 240,
            domain: 'bostonglobalventures.com'
        },
        'codeforamerica': {
            url: 'http://codeforamerica.org/about/startups/',
            logo: 'cfa.png',
            logo_width: 240,
            domain: 'codeforamerica.org'
        },
        'trovedata': {
            url: 'http://www.trovedata.com/',
            logo: 'trove.png',
            logo_width: 240,
            domain: 'trovedata.com'
        },
        'zipcar': {
            url: 'http://www.zipcar.com/',
            logo: 'zipcar.gif',
            logo_width: 140,
            domain: 'zipcar.com'
        },
        'sobi': {
            url: 'http://socialbicycles.com/',
            logo: 'sobi.png',
            logo_width: 200,
            domain: 'socialbicycles.com'
        },
        'placemeter': {
            url: 'http://placemeter.com/',
            logo: 'placemeter.png',
            logo_width: 240,
            domain: 'placemeter.com'
        },
        'greaterplaces': {
            url: 'http://greaterplaces.com/',
            logo: 'greaterplaces.png',
            logo_width: 240,
            domain: 'greaterplaces.com'
        },
        'opportunityspace': {
            url: 'http://www.opportunityspace.org/',
            logo: 'opportunityspace.jpg',
            logo_width: 240,
            domain: 'opportunityspace.org'
        },
        'weathercloud': {
            url: 'http://weathercloud.co/',
            logo: 'weathercloud.png',
            logo_width: 240,
            domain: 'weathercloud.co'
        },
        'univision': {
            url: 'http://www.univision.com/',
            logo: 'univison.png',
            logo_width: 140,
            domain: 'univision.com'
        },
        'bostonnewtech': {
            url: 'http://bostonnewtech.org/',
            logo: 'bostonnewtech.png',
            logo_width: 240,
            domain: 'bostonnewtech.org'
        },
        'parkjockey': {
            url: 'https://parkjockey.com/',
            logo: 'parkjockey.jpg',
            logo_width: 240,
            domain: 'parkjockey.com'
        },
        'civicinsight': {
            url: 'http://civicinsight.com/',
            logo: 'civicinsight.png',
            logo_width: 240,
            domain: 'civicinsight.com'
        },
        'nyupt': {
            url: 'https://engineering.nyu.edu/',
            logo: 'nyupt.png',
            logo_width: 240,
            domain: 'engineering.nyu.edu'
        },
        'citytrackerx': {
            url: 'http://www.citytrackerx.com/',
            logo: 'citytrackerx.png',
            logo_width: 140,
            domain: 'citytrackerx.com'
        },
        'handup': {
            url: 'http://www.handup.us/',
            logo: 'handup.png',
            logo_width: 140,
            domain: 'handup.us'
        }
    };

    $scope.tweets = [{
        body: "@shaunabe very interesting indeed -- I am glad Stonly was so persistent I come today as well!'",
        body_link: 'https://twitter.com/ndahlberg/status/459837222850924544',
        author: '@ndahlberg',
        author_link: 'https://twitter.com/ndahlberg'
    }, {
        body: "fun, fascinating - great day at @UrbanUsCo #SmartCityStartups event in Miami w/ hand-picked group of key innovators.",
        body_link: 'https://twitter.com/anthonymobile/status/459466692729769984',
        author: '@anthonymobile',
        author_link: 'https://twitter.com/anthonymobile'
    }, {
        body: "THANK YOU!! Big shout to @shaunabe and @StonlyBaptiste for putting together brilliant #scs414",
        body_link: "https://twitter.com/LLGACities/status/459826552935817216",
        author: "@LLGACities",
        author_link: "https://twitter.com/LLGACities"
    }, {
        body: "i'd like the world to know i had a great time at http://smartcitystartups.com . thank you @shaunabe, @StonlyBaptiste, @UrbanUsCo, & team. #scs2014",
        body_link: "https://twitter.com/WELLO/status/460845542801543168",
        author: "@WELLO",
        author_link: "https://twitter.com/WELLO"
    }];


    $scope.timeline = [
        {
            date: "April 22",
            title: "Meetings and Exploration",
            events: [{
                time: "Ongoing",
                location: "TBD",
                title: "Scheduled one on one meetings",
                description: ""
            }, {
                time: "Afternoon (TBD)",
                location: "TBD",
                title: "Tour of Wynwood and galleries",
                description: ""
            }, {
                time: "7:00 - 9:00pm",
                location: "TBD",
                title: "Dinner and drinks",
                description: "Engineered collisions through pre-arranged groupings and seatings at kickoff dinner and drinks event in Wynwood. Participants will have their first chance to interact with the unconference selection board."
            }]
        },
        {
            date: "April 23",
            title: "Urban Tech Festival",
            events: [
                {
                    time: "8:30 - 9:30am",
                    location: "TBD",
                    title: "Breakfast",
                    description: "Optional continental breakfast and coffee. Continued opportunity to fill in the unconference selection board."
                }, {
                    time: "9:30 - 9:45am",
                    location: "TBD",
                    title: "Welcome and Icebreaker",
                    description: ""
                }, {
                    time: "9:45 - 10:30am",
                    location: "TBD",
                    title: "Opening Keynote",
                    description: "First keynote presentation followed by Q&A"
                }, {
                    time: "10:30 - 10:40am",
                    location: "TBD",
                    title: "Stretch Break",
                    description: ""
                }, {
                    time: "10:40 - 11:00am",
                    location: "TBD",
                    title: "Shaun Abrahamson: The Urban Tech Space",
                    description: ""
                }, {
                    time: "11:00 - 11:30am",
                    location: "TBD",
                    title: "Sascha Haselmayer: Procurement and CityMart",
                    description: "An opening presentation on CityMart’s experiences working in the B2G sector and advice for other companies."
                }, {
                    time: "11:30 - 12:30pm",
                    location: "TBD",
                    title: "Lunch",
                    description: "Final opportunity to fill in the unconference selection board."
                }, {
                    time: "12:30 - 2:00pm",
                    location: "TBD",
                    title: "Showcase setup and meeting time",
                    description: ""
                }, {
                    time: "2:00 - 3:00pm",
                    location: "TBD",
                    title: "VIP Showcase",
                    description: "Special guests are given a private tour of the showcase and chance to meet specific companies before the event opens to the public."
                }, {
                    time: "3:00 - 6:30pm",
                    location: "TBD",
                    title: "Urban Tech Showcase",
                    description: "The showcase opens to the public, featuring a gallery of startups along with 3 groups of short PechaKucha talks by founders, advisors and investors attending the conference. Visitors will be provided with a map of companies categorized by topic area to help them navigate the space."
                }, {
                    time: "6:30 - 7:30pm",
                    location: "TBD",
                    title: "Festival Keynote and Talks",
                    description: "An evening keynote and three selected PechaKucha talks for the happy hour crowd at the showcase."
                }
            ]
        },
        {
            date: "April 24",
            title: "Urban Tech Summit",
            events: [
                {
                    time: "8:30 - 9:30am",
                    location: "TBD",
                    title: "Breakfast",
                    description: "Optional continental breakfast and coffee."
                }, {
                    time: "9:30 - 9:45am",
                    location: "TBD",
                    title: "Welcome and Icebreaker",
                    description: ""
                }, {
                    time: "9:45 - 11:00am",
                    location: "TBD",
                    title: "Future of Urban Tech: Talks and Discussion",
                    description: "A series of PechaKucha style talks from 5 people on the topic of the urban tech field, followed by a group Q&A moderated by Shaun Abrahamson."
                }, {
                    time: "11:00 - 12:00pm",
                    location: "TBD",
                    title: "Breakout 1: Distribution",
                    description: "Three breakout groups on B2G, B2B and B2C business models. Group moderators: B2G (Sascha Haselmayer), B2B (TBD), B2C (TBD)"
                }, {
                    time: "12:00 - 1:00pm",
                    location: "TBD",
                    title: "Lunch",
                    description: ""
                }, {
                    time: "1:00 - 2:00pm",
                    location: "TBD",
                    title: "Breakout 2: Unconference",
                    description: "6 optional group slots, filled in by participants beforehand."
                }, {
                    time: "2:00 - 2:15pm",
                    location: "TBD",
                    title: "Stretch Break",
                    description: ""
                }, {
                    time: "2:15 - 3:15pm",
                    location: "TBD",
                    title: "Breakout 3: Unconference",
                    description: "6 optional group slots, filled in by participants beforehand."
                }, {
                    time: "3:15 - 4:30pm",
                    location: "TBD",
                    title: "Future of Funding: Talks and Discussion",
                    description: "A series of PechaKucha style talks from 5 people on the topic of the evolving landscape for funding urban tech projects, followed by a group Q&A moderated by Shaun Abrahamson."
                }, {
                    time: "4:30 - 4:45pm",
                    location: "TBD",
                    title: "Award Announcement & Close",
                    description: "Urban.Us announces funding of latest companies; closing of conference by Shaun Abrahamson."
                }
            ]
        }

    ];

    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        function x_initIsotope() {

            var $container = $('#timeline1');
            var $container2 = $('#timeline2');
            var $container3 = $('#timeline3');

            function addMarker() {
                // add marker
                $container.addClass('vline');
                $container.find('.item').each(function() {

                    // css
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var str = $(this).css('left');
                        var strIe9 = str;
                    }
                    if ($.browser.webkit) {
                        var str = $(this).css('-webkit-transform')
                    } else {
                        var str = $(this).css('transform');
                    }

                    // split
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substr = strIe9.split('px');
                    } else {
                        var substr = str.split(', ');
                    }

                    // substring
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substrNumber = substr;
                    }
                    if ($.browser.msie && parseInt($.browser.version, 10) > 9) {
                        var substrNumber = substr[substr.length - 4];
                    } else {
                        var substrNumber = substr[substr.length - 2];
                    }

                    // add class
                    if (substrNumber < 1) {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-left');
                    } else {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-right');
                    }
                });
            }

            function addMarker2() {
                $container2.addClass('vline');
                $container2.find('.item').each(function() {

                    // css
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var str = $(this).css('left');
                        var strIe9 = str;
                    }
                    if ($.browser.webkit) {
                        var str = $(this).css('-webkit-transform')
                    } else {
                        var str = $(this).css('transform');
                    }

                    // split
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substr = strIe9.split('px');
                    } else {
                        var substr = str.split(', ');
                    }

                    // substring
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substrNumber = substr;
                    }
                    if ($.browser.msie && parseInt($.browser.version, 10) > 9) {
                        var substrNumber = substr[substr.length - 4];
                    } else {
                        var substrNumber = substr[substr.length - 2];
                    }

                    // add class
                    if (substrNumber < 1) {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-left');
                    } else {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-right');
                    }
                });
            }

            function addMarker3() {
                $container3.addClass('vline');
                $container3.find('.item').each(function() {

                    // css
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var str = $(this).css('left');
                        var strIe9 = str;
                    }
                    if ($.browser.webkit) {
                        var str = $(this).css('-webkit-transform')
                    } else {
                        var str = $(this).css('transform');
                    }

                    // split
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substr = strIe9.split('px');
                    } else {
                        var substr = str.split(', ');
                    }

                    // substring
                    if ($.browser.msie && parseInt($.browser.version, 10) < 10) {
                        var substrNumber = substr;
                    }
                    if ($.browser.msie && parseInt($.browser.version, 10) > 9) {
                        var substrNumber = substr[substr.length - 4];
                    } else {
                        var substrNumber = substr[substr.length - 2];
                    }

                    // add class
                    if (substrNumber < 1) {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-left');
                    } else {
                        $(this).removeClass('item-left').removeClass('item-right');
                        $(this).addClass('item-right');
                    }
                });
            }

            $(window).resize(function() {
                // relayout on window resize
                $container.isotope('reLayout', function() {
                    addMarker();
                });
                $container2.isotope('reLayout', function() {
                    addMarker2();
                });
                $container3.isotope('reLayout', function() {
                    addMarker3();
                });
                $.waypoints('refresh');
            });
            $(window).load(function() {
                // initialize isotope
                $container.isotope({
                    itemSelector: '.item',
                    animationEngine: 'css'
                });
                $container.isotope('reLayout', function() {
                    addMarker();
                });
                $container2.isotope({
                    itemSelector: '.item',
                    animationEngine: 'css'
                });
                $container2.isotope('reLayout', function() {
                    addMarker2();
                });
                $container3.isotope({
                    itemSelector: '.item',
                    animationEngine: 'css'
                });
                $container3.isotope('reLayout', function() {
                    addMarker3();
                });
            });
            $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
                $('.timeline').find('.item').removeClass('item-left').removeClass('item-right');
                $('.timeline').removeClass('vline');
            });
            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                $container.isotope('reLayout', function() {
                    addMarker();
                });
                $container2.isotope('reLayout', function() {
                    addMarker2();
                });
                $container3.isotope('reLayout', function() {
                    addMarker3();
                });
                $.waypoints('refresh');
            });

            // Add active class to first tab
            $('.tab-pane:first-child').addClass('in active');
            $('#tabs li:first-child').addClass('active');
        }


        x_initIsotope();
    });


});


app.directive('timeline', function($timeout) {
    return {
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});
