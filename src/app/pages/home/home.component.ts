import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public obj: any;
  constructor(private objetos: ItensService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>  {
      this.obj = params['id'];
      const user = {id: this.obj};
      
    });
    
  }

 
  // itemPesquisa(e: any){
  //   this.pesquisa=(e.target.value);
  // }
  // tiraEspaco(palavra: string){
  //   const result = palavra.split(" ").join("-");
  //   console.log(result)
  //   return result;
  // }
  // detectar_mobile() { 
  //   if( navigator.userAgent.match(/Android/i)
  //   || navigator.userAgent.match(/webOS/i)
  //   || navigator.userAgent.match(/iPhone/i)
  //   || navigator.userAgent.match(/iPad/i)
  //   || navigator.userAgent.match(/iPod/i)
  //   || navigator.userAgent.match(/BlackBerry/i)
  //   || navigator.userAgent.match(/Windows Phone/i)
  //   ){
  //      return true;
  //    }
  //   else {
  //      return false;
  //    }
  //  }
   irPara(){
      console.log("Ir")
      window.location.href = `#/model/${this.obj}`;
   }
}
