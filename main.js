var guest_name_array=[];

function submit()
{
    var guest_name=document.getElementById("name_1").value;
    guest_name_array.push(guest_name);
    
    
}

function sor()
{
    guest_name_array.sort();
    console.log(guest_name_array);

    var display_guest_array_sort = [];

    var lenght_guest_array_sort = guest_name_array.length;
    console.log(lenght_guest_array_sort);

    for (var k = 0; k < lenghtdisplay_guest_array_sort; k++) 
    {
        display_guest_array_sort.push("<h4>NAME - " + guest_name_array[k] + "</h4>");
        console.log(display_guest_array_sort);
    }

}