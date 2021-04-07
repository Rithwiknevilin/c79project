
name_of_the_planet_array = [];
    
function submit()
{
    var display_planet_array = [];

    for (var j = 1; j <= 8; j++) 
    {
        var name_of_the_planet = document.getElementById("name_of_the_planet_"+j).value;
        console.log(name_of_the_planet);
        name_of_the_planet_array.push(name_of_the_planet);
    }

    console.log(name_of_the_planet_array);

    var lenght_of_name_of_planets_array = name_of_the_planet_array.length;
    console.log(lenght_of_name_of_planets_array);

    for (var k = 0; k < lenght_of_name_of_planets_array; k++) 
    {
        display_planet_array.push("<h4>NAME - "+ name_of_the_planet_array[k] + "</h4>");
        console.log(display_planet_array);
    }

    console.log(display_planet_array);
    document.getElementById("display_name_with_commas").innerHTML = display_planet_array;

    var remove_commas = display_planet_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_the_planet_array.sort();
    console.log(name_of_the_planet_array);

    var display_planet_array_sorting = [];

    var lenght_of_name_of_planets_array = name_of_the_planet_array.length;
    console.log(lenght_of_name_of_planets_array);

    for (var k = 0; k < lenght_of_name_of_planets_array; k++) 
    {
        display_planet_array_sorting.push("<h4>NAME - " + name_of_the_planet_array[k] + "</h4>");
        console.log(display_planet_array_sorting);
    }

    var remove_commas = display_planet_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


//Additional activity
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_planet_array +"</h1>";
}





