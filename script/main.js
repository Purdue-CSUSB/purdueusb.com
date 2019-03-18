var team = [
    {
        name: 'Ian Renfro',
        role: 'Help Room & Internships and Interviews',
        img: 'ian'
    },
    {
        name: 'Kameron Lutes',
        role: 'President',
        img: 'kameron'
    },
    {
        name: 'Puja Mittal',
        role: 'Kanban Challenge',
        img: 'puja'
    },
    {
        name: 'Sean Flannery',
        role: '',
        img: 'sean'
    },
    {
        name: 'Ian Zanger',
        role: 'Vice President',
        img: 'ianz'
    },
    {
        name: 'Nirali Rai',
        role: 'Treasurer',
        img: 'nirali'
    },
    {
        name: 'Rohan Gupta',
        role: 'CS 193',
        img: 'rohan'
    },
    {
        name: 'Megan Walsh',
        role: '',
        img: 'megan'
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
        name: 'Lauren Lum',
        role: 'Secretary',
        img: 'lauren'
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
        name: 'Zach Bryant',
        role: '',
        img: 'zach'
    },
    {
        name: 'Arianna Smith',
        role: '',
        img: 'arianna'
    },
    {
        name: 'Christopher Lehman',
        role: '',
        img: 'christopher'
    },
    {
        name: 'Cindy Ding',
        role: '',
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
    }
];

for (var i = 0; i < team.length; i++) {
    $('.team').append("<div class='col-sm-2'><div class='team-item' style=\"background: url('img/team/" + team[i].img + ".jpg'); background-size: cover; background-position: center\"><div class='team-item-text-wrapper'><div class='team-item-text'><div class='name'>" + team[i].name + "</div><div class='role'>" + team[i].role + "</div></div></div></div></div>");
}

// Makes team height same as width
var cw = $('.team-item').width();
$('.team-item').css({'height':cw+'px'});

$(window).resize(function(){
    var cw = $('.team-item').width();
    $('.team-item').css({'height':cw+'px'});
});
