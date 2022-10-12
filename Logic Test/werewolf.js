var nama = "";
var peran = "";
if (nama == "" && peran == ""){
  console.log ("Nama harus diisi")
  }else if (nama == "John" && peran == ""){
      console.log ("Halo John, Pilih peranmu untuk memulai game!")
  }else if (nama == "Jane" ){
      console.log ("Selamat datang di Dunia Werewolf, Jane")
    }if (peran == "Penyihir"){
    console.log ("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
  }else if (peran == "Werewolf") {
    console.log ("Halo Werewolf Jane, kamu dapat melihat siapa yang menjadi werewolf!")
  }else {
    console.log ("Halo Guard Jane, kamu dapat melihat siapa yang menjadi werewolf!")
  };

