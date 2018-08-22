 "use strict";
        /*global $ */
        var me = this;

        function SearchSongs(){
            var artist = document.getElementById("artist").value;
            alert(artist);
            $.ajax({
                url: 'http://www.songsterr.com/a/ra/songs.json?pattern='+ artist,

                type: 'GET',
                error: function() {
                    // process error
                    console.log('Error');
                    console.log('Error');
                    console.log('Error');
                    console.log('Error');
                    console.log('Error');
                    console.log('Error');
                },

                success: function(data) {
                    // process the result here 
                    var output ="";
                    for (var i = 0; i < data.length; i++) {
                         output += `<tr><td>${data[i].title}</td><td>${data[i].artist.nameWithoutThePrefix}</td></tr>`;
                    

                    });
                    document.getElementById("output").innerHTML = "<table>" + output + "</table>";
                    //console.log(data);
                }

            }
