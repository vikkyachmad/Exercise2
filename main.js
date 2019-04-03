var nil1;
  var nil2;
     var op;

        function InputData(x){
            var nil = x;
            (document.querySelector('#layar').value)=(document.querySelector('#layar').value+nil);
            }
            
        function pilTambah(){
            op = 'add';
            nil1 = parseFloat(document.querySelector('#layar').value);
            document.querySelector('#layar').value="";
            }
        function pilKurang(){
            op = 'min';
            nil1 = parseFloat(document.querySelector('#layar').value);
            document.querySelector('#layar').value="";
            
            }
        function pilKali(){
            op = 'kali';
            nil1 = parseFloat(document.querySelector('#layar').value);
            document.querySelector('#layar').value="";
            
            }
        function pilBagi(){
            op = 'bagi';
            nil1 = parseFloat(document.querySelector('#layar').value);
            document.querySelector('#layar').value="";
        }
        function pilPangkat(){
            op='pangkat';
            nil1 = parseFloat(document.querySelector('#layar').value);
            document.querySelector('#layar').value="";

        }
         
        function Hasil(){
            nil2 = parseFloat(document.querySelector('#layar').value);
            if(op=='add'){
                document.querySelector('#layar').value = nil1 + nil2;
                }
                else if(op=='min'){
                    document.querySelector('#layar').value = nil1 - nil2;
                    }
                    else if(op=='kali'){
                        document.querySelector('#layar').value = nil1 * nil2;
                        }
                        else if(op=='bagi'){
                            document.querySelector('#layar').value = nil1 / nil2;
                            }
                            else if(op=='pangkat'){
                                
                                document.querySelector('#layar').value = Math.pow(nil1,nil2);                                
                            }
                    }
            function plusMinus(){
                var cek = parseFloat(document.querySelector('#layar').value);
                if(cek<0){
                    document.querySelector('#layar').value = cek * (-1);
                    }
                    else{
                        document.querySelector('#layar').value = cek * (-1);
                        }
                        
                    }
            function hapus(){
                document.querySelector('#layar').value="";
            }
            function angkaNol2(){
                        document.querySelector('#layar').value = document.querySelector('#layar').value + "00";  
                        
                        }  
            function angkaNol3(){
                        document.querySelector('#layar').value = document.querySelector('#layar').value + "000";  
                        
            }