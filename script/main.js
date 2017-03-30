var team = [
    {
        name: 'Ben Alderfer',
        role: 'Design Workshops',
        img: 'ben'
    },
    {
        name: 'Bryan Duffy',
        role: 'Former Treasurer',
        img: 'duffy'
    },
    {
        name: 'Evan Walsh',
        role: 'CS190',
        img: 'evan'
    },
    {
        name: 'Mason Everett',
        role: 'Hardware Lab',
        img: 'mason'
    },
    {
        name: 'Rhys Howell',
        role: 'Science Fair',
        img: 'rhys'
    },
    {
        name: 'Spencer Brown',
        role: 'CS190',
        img: 'spencer'
    },
    {
        name: 'Adam Loeb',
        role: 'Server Project',
        img: 'adam'
    },
    {
        name: 'Caitlin Kennedy',
        role: 'USB Labs',
        img: 'caitlin'
    },
    {
        name: 'Jay Hankins',
        role: 'President',
        img: 'jay'
    },
    {
        name: 'Marty Von Kausas',
        role: 'Former Vice President',
        img: 'marty'
    },
    {
        name: 'Matt Ess',
        role: 'Help Room',
        img: 'matt'
    },
    {
        name: 'Shane DeWael',
        role: 'CPP Mixer',
        img: 'shane'
    },
    {
        name: 'Ahad Sagheer',
        role: 'Help Room & CS190',
        img: 'ahad'
    },
    {
        name: 'Cole Johnson',
        role: 'Vice President',
        img: 'cole'
    },
    {
        name: 'Emmy Zhang',
        role: 'Shadow Day',
        img: 'emmy'
    },
    {
        name: 'Ian Renfro',
        role: 'Help Room & Internships and Interviews',
        img: 'ian'
    },
    {
        name: 'Kameron Lutes',
        role: 'Shadow Day',
        img: 'kameron'
    },
    {
        name: 'Puja Mittal',
        role: 'Kanban Challenge',
        img: 'puja'
    },
    {
        name: 'Amol Jha',
        role: '',
        img: 'amol'
    },
    {
        name: 'Ian Zanger',
        role: 'Secretary',
        img: 'ianz'
    },
    {
        name: 'Ivy Chenyao',
        role: 'Design Workshops',
        img: 'ivy'
    },
    {
        name: 'Nirali Rai',
        role: 'Treasurer',
        img: 'nirali'
    },
    {
        name: 'Rohan Gupta',
        role: '',
        img: 'rohan'
    },
    {
        name: 'Zach Johnson',
        role: 'Design Workshops',
        img: 'zach'
    }
];

for (var i = 0; i < team.length; i++) {
    $('.team').append("<div class='col-sm-2'><div class='team-item' style=\"background: url('img/team/" + team[i].img + ".jpg'); background-size: cover; background-position: center\"><div class='team-item-text'><div class='name'>" + team[i].name + "</div><div class='role'>" + team[i].role + "</div></div></div></div>");
}

// Makes team height same as width
var cw = $('.team-item').width();
$('.team-item').css({'height':cw+'px'});

$(window).resize(function(){
    var cw = $('.team-item').width();
    $('.team-item').css({'height':cw+'px'});
});
