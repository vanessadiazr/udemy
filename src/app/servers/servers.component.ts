import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    //function(arguments){body} <=> (arguments) =>{body}
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  //ao colocar (event: Event) em vez de  (event:any)
  //é  necessario colocar tambem (<HTMLInputElement>event.target).value;
  //em vez de apenas event.target.value;
  //para informar o TypeScript que sabemos que o tipo
  //do elemento de html deste evento é um elemento input html
  onUpdateServerName(event: Event){
    //cada letra introduzida vai sendo mostrada separadamente:
    console.log(event);
    //pega no valor completo do input e guarda-o na variavel serverName:
    this.serverName = (<HTMLInputElement>event.target).value;
    //mostra a variavel serverName que contem todos os elementos(letras) introduzidos no input:
    console.log(this.serverName);
  }
}
