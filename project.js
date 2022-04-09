{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}

    function submit() {
        $(document).ready(function () {


            var Name = document.getElementById('name').value;
            var FName = document.getElementById('fname').value;
            var MName = document.getElementById('mname').value;
            var Gender = document.getElementById('gender').value;
            var Nationality = document.getElementById('nation').value;
            var Cast = document.getElementById('cast').value;
            var Blood = document.getElementById('blood').value;
            var Mrrg = document.getElementById('Maritial').value;
            var Age = document.getElementById('age').value;
            var WHname = document.getElementById('whname').value;
            var DOB = document.getElementById('dob').value;
            var Email = document.getElementById('email').value;
            var Contactno = document.getElementById('contactno').value;
            var Otherno = document.getElementById('otherno').value;
            var Address = document.getElementById('adds').value;
            var Rename = document.getElementById('rname').value;
            var Reid = document.getElementById('rid').value;
            var Otherds = document.getElementById('otherds').value;
            var Date = document.getElementById('daate').value;
            var Place = document.getElementById('placee').value;
             
            // $('#details tbody').empty();

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:3000/isdoform",
                dataType: 'json',
                async: false,
                data: { 'Membername': Name,'Fname':FName,'Mname':MName,'Gender':Gender,'Nationality':Nationality,'Cast':Cast,'Bloodgp': Blood,'Mstatus':Mrrg,'Age':Age,'WHname':WHname,'Dob':DOB,'Email':Email,'Contactno':Contactno,'Otherno':Otherno,'Address':Address,'Refername':Rename,'Referid':Reid,'Otherdes':Otherds,'Date':Date,'Place':Place},
                success: function (data) {

                    alert('You Have Successfully Submitted Your Data');
                    window.location.href="isdocontact.html";//to refresh the input tags in html page



                },

                error: function () {

                }

            });

        });

    }
 
