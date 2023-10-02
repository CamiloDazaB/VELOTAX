import { Component,OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
 

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public api:RestService){
    this.dataSource = new MatTableDataSource();

  }
 
  





  
  public get (){
    this.api.Get("Pasajeroes");
}
 
   
  
    ngOnInit(): void {
      this.api.Get("Pasajeroes").then((res)=>{

        for (let index = 0; index < res.length; index++){
          this.loadTable([res[index]])
        
        } 
        this.dataSource.data = res;
       

        console.log(res);

      
      });
    }
  
  
    ngAfterViewInit() {
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


    loadTable(data:any[ ]){
      this.displayedColumns=[];
      if(data.length>0){
      for(let column in data[0]){
        this.displayedColumns.push(column)
      }
      this.displayedColumns.push('Acciones');
    }
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
 

