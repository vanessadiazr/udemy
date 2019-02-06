import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    //if(this.serverStatus == 'online'){
      //return 'green'
    //}else if(this.serverStatus == 'offline'){
      //return 'red';

      return this.serverStatus === 'online' ? 'green' : 'red' ;
    }
  

  //se o numero gerado for maior que 0.5 serverStatus = online, se nao ofline
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  ngOnInit() {
  }

}
