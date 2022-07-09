import { ArModelService } from './../../services/arModel/arModel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItensService } from 'src/app/services/itens.service';

@Component({
  selector: 'app-button-ra',
  templateUrl: './button-ra.component.html',
  styleUrls: ['./button-ra.component.css']
})
export class ButtonRAComponent implements OnInit {
  
  listaObjetos:any = [];
  tipo="Todos";
  pesquisa = ""
  celular = false;
  obj = "";
  glb = "";
  usdz = "";
  iphone = false;
  arInfo: any;
  constructor(private objetos: ItensService, private route: ActivatedRoute, private arModelService: ArModelService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>  {
      this.obj = params['id'];
      const user = {id: this.obj};
      this.objetos.getUrl(user).subscribe(result =>{
        this.arInfo = result;
        this.glb = result.GLB.link;
        this.usdz = result.USDZ.link;
        console.log(this.arInfo)
      })
    });
    this.celular = this.detectar_mobile();
    this.iphone = this.isIphone();
  }
  detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
   isIphone() { 
    if( navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    
    ){
       return true;
     }
    else {
       return false;
     }
   }
   async irPara(){

    // window.location.href = `https://simplexr.bugaboostudio.com.br/model?id=${this.obj}`;
    // window.location.href = `#/erro`;
   }

   async save(){
    const dados = {
      link: this.arInfo.ar_link,
      idModel: this.arInfo.id ,
      clique: 1,
      ultimoClique: new Date(),
      nome: this.arInfo.nameAR
    }
    this.arModelService.createArModels(dados).subscribe(res => {
      const result: any = res;
      const tipo = this.detectar_mobile() == true ? 'smartphone' : 'desktop';
      let smartphone = "Desktop"
      if (tipo === 'smartphone'){
        smartphone = this.isIphone() == true ? 'Iphone' : 'Android';
      }
      const dados2 = {
        arModel: result._id,
        nome: location.hostname, 
        url: location.href,
        tipo: smartphone,
        clique: 1,
        ultimoClique: new Date(),
      }
      console.log(dados2)
      this.arModelService.createSites(dados2).subscribe(res2 => {
        console.log(res2)
        if ( dados2.tipo === "Desktop"){
          window.location.href = `https://simplexr.bugaboostudio.com.br/model?id=${this.obj}`;

        }
      })
    })
   }

}
