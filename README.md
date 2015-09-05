a.js:

    var sleep = function (ms, cb) {
      setTimeout(function () {
        cb();
      }, ms);
    };

    sleep(20, function () {
      console.log(0);
      sleep(20, function () {
        console.log(1);
        sleep(20, function () {
          console.log(2);
          sleep(20, function () {
            console.log(3);
            sleep(20, function () {
              console.log(4);
              sleep(20, function () {
                console.log(5);
                sleep(20, function () {
                  console.log(6);
                  sleep(20, function () {
                    console.log(7);
                    sleep(20, function () {
                      console.log(8);
                      sleep(20, function () {
                        console.log(9);
                        console.log('end');
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });


a.lix:

    sleep := [ms]->{
      cc call [brk]->{
        ms timeout []->{
          brk call
        }
      }
    }

    i := 0
    while (i < 10) {
      20 sleep
      i print
      i = i + 1
    }

    'end' print


Both of the above do the same thing. Which code is simpler and more maintainable?

Lix is a new language whose code is compiled into javascript. 

Write Lix, Stop the 'callback hell'!

