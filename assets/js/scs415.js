var app = angular.module( 'scs415', [] );

app.controller( 'MainCtrl', function( $scope, $http, $compile ) {

    $scope.attRows2 = [
        ['rosebroome','dougchertok','andrewfrey'],
        ['storybellows','matthaggman','anthonytownsend']
    ];
    $scope.participants = {
        'rosebroome': {
            name: 'Rose Broome',
            avatar: 'rosebroome.png',
            org: 'HandUp'
        },
        'dougchertok': {
            name: 'Doug Chertok',
            avatar: 'dougchertok.jpg',
            org: 'VastVC'
        },
        'andrewfrey': {
            name: 'Andrew Frey',
            avatar: 'andrewfrey.jpg',
            org: 'CC Residential'
        },
        'storybellows': {
            name: 'Story Bellows',
            avatar: 'storybellows.jpg',
            org: 'Urban Mechanics'
        },
        'matthaggman': {
            name: 'Matt Haggman',
            avatar: 'matthaggman.jpg',
            org: 'Knight Foundation'
        },      
        'anthonytownsend': {
            name: 'Anthony Townsend',
            avatar: 'anthonytownsend.jpg',
            org: 'NYU'
        },             
    }

    $scope.attRows = [
        ['bmw','vastvc','omidyar'],
        ['kauffman','citymart','newurbanmechanics'],
        ['nyu','cleanweb','livingcities'],
        ['bostonglobalventures', 'hraadvisors', 'codeforamerica' ],
        ['ccg','miamidade', 'nei'],
        ['publicstuff','seeclickfix', 'tumml'],
        ['constant_contact','brck', 'architizer'],
        ['birdi', 'dash','kairos'],
        ['learnernation','neighbor','pwrstation'],
        ['rachio','seamlessdocs','kiwi'],
        ['whatupbridge','thetransitapp','spravwater'],
        ['cyclehop','ccresidential','pedleymillin'],
        ['straat', 'miles', 'privateadvising'],
        ['tresmares','loveland','smartprocure'],
        ['republicbike','p3gm','urban4m'],
        ['techcocktail', 'refreshmiami','trovedata'],
        ['zipcar', 'sobi', 'placemeter'],
        ['greaterplaces', 'opportunityspace', 'weathercloud'],
        ['univision','bostonnewtech','parkjockey'],
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
    
});