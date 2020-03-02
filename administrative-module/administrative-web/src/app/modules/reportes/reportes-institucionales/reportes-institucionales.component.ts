import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import *as jsPDF from 'jspdf';

@Component({
  selector: 'app-reportes-institucionales',
  templateUrl: './reportes-institucionales.component.html',
  styleUrls: ['./reportes-institucionales.component.css']
})
export class ReportesInstitucionalesComponent implements OnInit {
  @ViewChild('content', {static: false}) content : ElementRef;
  constructor() { }

  ngOnInit() {
  }
  public downloadPDF(){
    let doc =new jsPDF('p', 'pt', 'letter');
    let specialElementHandlers ={
      '#editor':function(element,renderer){
        return true;
      }
};

let content =this.content.nativeElement;
doc.fromHTML(content.innerHTML,80,80,{
  'width':522,
  
  'elementHandlers':specialElementHandlers
});
doc.save('test.pdf');
  }

}
