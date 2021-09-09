    let string;
        function strMethod(){
            string  = prompt("문자열");
            document.getElementById('len').innerHTML = string.length;
            document.getElementById('str').innerHTML = string;
            
        }
        function getReslut(){
            var first = document.getElementById('first').value;
            var last = document.getElementById('last').value;
            
            document.getElementById('result').innerHTML = string.substring(first,last);
        }
        function search(){
            var searchText = document.getElementById('search').value;
            document.getElementById('index').innerHTML = string.indexOf(searchText);
        }