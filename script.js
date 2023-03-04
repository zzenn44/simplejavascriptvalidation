 // alert('Hello World');
// console.log('hello world');

function validation()
{
    // alert('Hello Broooooo');

    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    // alert(name+' '+address);

    if(name == '')
    {
        alert('name is required');
        
        // document.querySelector('#name')
        document.getElementById('name').focus();
    }

    if(address == '')
    {
        alert('Address is required')
    }

}

// document.getElementById('trigger').addEventListener("click",validation);
document.getElementById('myForm').addEventListener("submit",validation);

// validation();