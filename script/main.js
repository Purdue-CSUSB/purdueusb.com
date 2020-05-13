var team = [
    {
        name: 'Lauren Lum',
        role: 'President',
        img: 'lauren'
    },
    {
        name: 'Albert Zhong',
        role: '',
        img: 'albert'
    },
    {
        name: 'CJ Enright',
        role: '',
        img: 'cj'
    },
    {
        name: 'Sagar Nattuvetty',
        role: '',
        img: 'sagar'
    },
    {
        name: 'Sera Savas',
        role: '',
        img: 'sera'
    },
    {
        name: 'Arianna Smith',
        role: 'Vice President',
        img: 'arianna'
    },
    {
        name: 'Christopher Lehman',
        role: '',
        img: 'christopher'
    },
    {
        name: 'Cindy Ding',
        role: 'Treasurer',
        img: 'cindy'
    },
    {
        name: 'Noah Alderton',
        role: '',
        img: 'noah'
    },
    {
        name: 'Pallav Agarwal',
        role: '',
        img: 'pallav'
    },
    {
        name: 'Pinaki Mohanty',
        role: '',
        img: 'pinaki'
    },
    {
        name: 'Riley McKeever',
        role: '',
        img: 'riley'
    },
    {
        name: 'Sarah Thomas',
        role: '',
        img: 'sarah'
    },
    {
        name: 'Neerali Shah',
        role: 'Secretary',
        img: 'neerali'
    },
    {
        name: 'Sweta Saravanan',
        role: '',
        img: 'sweta'
    },
    {
        name: 'Simran Kadadi',
        role: '',
        img: 'simran'
    },
    {
        name: 'Shashank Kumar',
        role: '',
        img: 'shashank'
    },
    {
        name: 'Caleb Ahn',
        role: '',
        img: 'caleb'
    },
    {
        name: 'Arya Sharma',
        role: '',
        img: 'arya'
    },
    {
        name: 'Anisha Bhat',
        role: '',
        img: 'anisha'
    },
];


var initiatives = [
    {
        title: 'CS 193',
        description: 'Tools course taught by USB members',
        img: 'cs193-thumbnail',
        linkText: '',
        linkURL: '',
    },
    {
        title: 'Help Room',
        description: 'CS 193, CS 180, CS 182, and CS 240 Help',
        img: 'help-room-thumbnail',
        linkText: 'View Times',
        linkURL: 'helproom/index.html',
    },
    {
        title: 'Office Hours',
        description: 'Come talk with us!',
        img: 'oh',
        linkText: 'View Times',
        linkURL: 'officehours/index.html',
    },
    {
        title: 'CS 191 Panel',
        description: 'Q&A panel of upperclass CS/DS students',
        img: 'CS191_Panel_Logo',
        linkText: '',
        linkURL: '',
    },
    {
        title: 'Virtual Office Hours',
        description: 'Innovative new way to hold office hours',
        img: 'Virtual_Office_Hours_Logo',
        linkText: '',
        linkURL: '',
    },
    {
        title: 'Undergraduate Student Forum',
        description: 'Forum for undergrads to discuss their experiences',
        img: 'Student_Forum_Logo',
        linkText: '',
        linkURL: '',

    }
];

for (var i = 0; i < team.length; i++) {
    $('.team').append("<div class='col-sm-2'><div class='team-item' style=\"background: url('img/team/" + team[i].img + ".jpg'); background-size: cover; background-position: center\"><div class='team-item-text-wrapper'><div class='team-item-text'><div class='name'>" + team[i].name + "</div><div class='role'>" + team[i].role + "</div></div></div></div></div>");
}

for (var i = 0; i < initiatives.length; i++) {
    $('.initiatives').append(`<div class="col-sm-4">
    <div class="card text-center">
        <div class="init-img" style="background: url('img/initiative_logos/` + initiatives[i].img +`.png'); background-size: cover; background-position: center"></div>
        <div class="card-body">
            <div class="card-text">
                <h6>`+ initiatives[i].title + `</h6>
                <p>
                    ` + initiatives[i].description + ` 
                </p>
            </div>
        </div>
        <div class="card-body">
        <b><a href="`+ initiatives[i].linkURL +`">` + initiatives[i].linkText + `</a></b>
        </div>
    </div>
</div>`);
}

// Makes team height same as width
var cw = $('.team-item').width();
$('.team-item').css({'height':cw+'px'});

$(window).resize(function(){
    var cw = $('.team-item').width();
    $('.team-item').css({'height':cw+'px'});
});
