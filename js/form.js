class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Speedo Racing Game");
        title.position(130,0);

        var input=createInput("Name");


        var button=createButton("Login");

        var greeting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name+" to the Speedo Racing Game");
            greeting.position(130,160);
        });
    }
}