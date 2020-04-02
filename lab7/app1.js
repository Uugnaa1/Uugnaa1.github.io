  var foo = 1;
    
        function bar() {
            alert(foo);
             if (!foo) {
                var foo = 10;
            }
            alert(foo);
        }
        bar();