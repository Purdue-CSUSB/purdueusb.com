var team = [
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
        role: 'Demo Day',
        img: 'marty'
    },
    {
        name: 'Matt Ess',
        role: 'Help Room',
        img: 'matt'
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
        name: 'Ian Zanger',
        role: 'Secretary',
        img: 'ianz'
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
    $('.team').append("<div class='col-sm-2'><div class='team-item' style=\"background: url('img/team/" + team[i].img + ".jpg'); background-size: cover; background-position: center\"><div class='team-item-text-wrapper'><div class='team-item-text'><div class='name'>" + team[i].name + "</div><div class='role'>" + team[i].role + "</div></div></div></div></div>");
}

// Makes team height same as width
var cw = $('.team-item').width();
$('.team-item').css({'height':cw+'px'});

$(window).resize(function(){
    var cw = $('.team-item').width();
    $('.team-item').css({'height':cw+'px'});
});
