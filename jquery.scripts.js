/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function myFunction2() {
    var x = document.getElementById("sublinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction3() {
    var x = document.getElementById("about-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction4() {
    var x = document.getElementById("join-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction5() {
    var x = document.getElementById("commons-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var inArea,
    map = $('#logomap'),
    captions = {
        reviews: ["Reviews",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "],
        jobs: ["Job Guide",
            "Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Amet risus nullam eget felis eget. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Ut aliquam purus sit amet luctus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Sed lectus vestibulum mattis ullamcorper velit. Vitae proin sagittis."],
        journals: ["Journals",
            "Velit scelerisque in dictum non. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Tristique et egestas quis ipsum suspendisse ultrices. Turpis egestas integer eget aliquet nibh praesent tristique magna. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Suspendisse in est ante in. Blandit volutpat maecenas volutpat blandit aliquam. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Rutrum quisque non tellus orci ac auctor augue. Eget sit amet tellus cras adipiscing enim."],
        books: ["Book Channel",
            "Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse sed nisi lacus sed viverra tellus in hac. Magna sit amet purus gravida quis blandit turpis. Aliquam etiam erat velit scelerisque. Orci phasellus egestas tellus rutrum tellus pellentesque. Donec massa sapien faucibus et molestie ac feugiat sed. Tempor orci eu lobortis elementum nibh tellus. Ac auctor augue mauris augue neque. Sit amet risus nullam eget felis eget nunc. Nisi est sit amet facilisis. "],
        networks: ["Networks",
            "Egestas integer eget aliquet nibh praesent tristique magna sit amet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sollicitudin tempor id eu nisl nunc mi. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Posuere morbi leo urna molestie at elementum eu facilisis. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Lorem mollis aliquam ut porttitor leo a diam. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. "],
         announcements: ["Announcements",
            "Viverra vitae congue eu consequat ac felis donec. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Cursus turpis massa tincidunt dui ut. Lacus suspendisse faucibus interdum posuere. Turpis nunc eget lorem dolor. Morbi tincidunt ornare massa eget egestas. Varius quam quisque id diam vel quam elementum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Viverra mauris in aliquam sem fringilla ut morbi."],    
    },
    single_opts = {
        fillColor: '000000',
        fillOpacity: 0,
        stroke: true,
        strokeColor: 'ff0000',
        strokeWidth: 2
    },
    all_opts = {
        fillColor: 'ffffff',
        fillOpacity: 0.6,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ffffff'
    },
    initial_opts = {
        mapKey: 'data-name',
        isSelectable: false,
        onMouseover: function (data) {
            inArea = true;
            $('#logo-caption-header').text(captions[data.key][0]);
            $('#logo-caption-text').text(captions[data.key][1]);
            $('#logo-caption').show();
        },
        onMouseout: function (data) {
            inArea = false;
            $('#logo-caption').hide();
        }
    };
    opts = $.extend({}, all_opts, initial_opts, single_opts);


    // Bind to the image 'mouseover' and 'mouseout' events to activate or deactivate ALL the areas, like the
    // original demo. Check whether an area has been activated with "inArea" - IE<9 fires "onmouseover" 
    // again for the image when entering an area, so all areas would stay highlighted when entering
    // a specific area in those browsers otherwise. It makes no difference for other browsers.

    map.mapster('unbind')
        .mapster(opts)
        .bind('mouseover', function () {
            if (!inArea) {
                map.mapster('set_options', all_opts)
                    .mapster('set', true, 'all')
                    .mapster('set_options', single_opts);
            }
        }).bind('mouseout', function () {
            if (!inArea) {
                map.mapster('set', false, 'all');
            }
        });
