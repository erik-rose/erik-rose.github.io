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
        reviews: ["H-Net Reviews",
            "H-Net Reviews is the largest online professional reviewing archive, with approximately 46,000 free book reviews, offered under Creative Commons licensing, commissioned by professional review editors, written, edited, copyedited, and published in an original online system, cataloged by the Library of Congress, and available on web, email, and in PDF."],
        jobs: ["H-Net Job Guide",
            "The Job Guide is the premier source of information about academic job postings in the US and abroad. The Job Guide increasingly serves the non-academic world of non-profits, government, and NGOs, as well as for-profit companies seeking high quality candidates with specialized training and experience. "],
        journals: ["H-Net Journals",
            "H-Net Journals is a new service to facilitate the publication of high-quality open access peer-reviewed scholarship through any of H-Net's subject-specific networks. All H-Net Journals are managed and overseen by editorial boards of qualified scholars and clearly outline their peer review standards and procedures on their About pages. "],
        books: ["The H-Net Book Channel",
            "The Book Channel is a book announcement service that helps readers stay informed about recently published titles in their fields. The H-Net Book Channel also publishes original editorial content that aims to contextualize and comment on new trends in academic publishing. "],
        networks: ["H-Net Networks",
            "The H-Net Commons is a robust content management platform that serves as the foundation for what many have called H-Net 2.0 and is home to 180 free online communities (Networks) edited by 300 volunteer field experts worldwide with approximately 200,000 subscribers."],
         announcements: ["H-Announce",
            "H-Announce is a moderated distribution service for events, conferences, calls for papers, calls for publication, programs, workshops, sources of short-term funding, fellowships, and news from H-Net and our affiliates."],    
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


    // on to the image 'mouseover' and 'mouseout' events to activate or deactivate ALL the areas, like the
    // original demo. Check whether an area has been activated with "inArea" - IE<9 fires "onmouseover" 
    // again for the image when entering an area, so all areas would stay highlighted when entering
    // a specific area in those browsers otherwise. It makes no difference for other browsers.

    map.mapster('off')
        .mapster(opts)
        .on('mouseover', function () {
            if (!inArea) {
                map.mapster('set_options', all_opts)
                    .mapster('set', true, 'all')
                    .mapster('set_options', single_opts);
            }
        }).on('mouseout', function () {
            if (!inArea) {
                map.mapster('set', false, 'all');
            }
        });
