import { ArModelService } from './../../services/arModel/arModel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model: any;
  site: any;
  constructor(private route: ActivatedRoute, private arModelService: ArModelService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.arModelService.getOneArModels(id).subscribe(res =>{
        this.model = res;
        this.arModelService.getAllSitesBymodels(this.model._id).subscribe(res => {
          this.site = res;
          console.log(this.site)
        })
      }, err => {
        alert('Model ainda não possui dados no sistema');
        window.location.href = '#/home'
      })

    });
  }

}
