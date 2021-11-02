const Onclick = () =>{
    //テキストを表示
    const inputtext = document.getElementById("inputtext").value
    document.getElementById("inputtext").value = "";
    //テキストをリセット
    //TODOに表示する
     // div を生成
     const div = document.createElement("div");
     div.className = "todolist"
     //li を生成
     const li = document.createElement("li");
     li.innerText = inputtext;
     //divの子要素を各要素に設定 divの子要素liですよ
     div.appendChild(li);
     console.log(div);

     //未完了リストに追加
     
    //追加ボタン
}


//ボタンを押したら
document
.getElementById("addbtn")
.addEventListener("click" , () => Onclick());