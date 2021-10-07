import { Component,AfterViewInit, ViewEncapsulation,ViewChild, EventEmitter, OnInit} from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { FormControl } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
  
  source: any = {
    localdata: [],
    datafields: [
      { name: 'id', type: 'string' },
      { name: 'longtext', type: 'string' },
      { name: 'shorttext', type: 'string' },
      { name: 'shorttext1', type: 'string' },
      { name: 'shorttext2', type: 'string' },
      { name: 'shorttext3', type: 'string' },
    ],
    datatype: 'array',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  private scheduleTemplateButton = (
    row,
    column: any,
    value: string,
    htmlElement: HTMLElement
  ): any => {
    const container = document.createElement('div');
    container.style.border = 'none';
    container.classList.add('w-100');
    container.classList.add('h-100');
    container.classList.add('left-item');
    container.classList.add('d-flex');

    const container1 = document.createElement('div');
    container1.id = 'myNote' + row.uniqueid.replace(/-/g, '') + '1';
    container1.style.border = 'none';
    container1.classList.add('white-space-nowrap');
    container1.classList.add('my-auto');
    container.classList.add('note-child-class');
    // container1.innerText = value;
    container1.innerText = value
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\r/g, '\r');
    container.appendChild(container1);
    htmlElement.appendChild(container);
  };

  columns: any[] = [
    { text: 'Id', datafield: 'id' },
    {
      text: 'Long Text',
      datafield: 'longtext',

      initwidget: (
        row: number,
        column: any,
        value: any,
        htmlElement: HTMLElement
      ): void => {},
      createwidget: this.scheduleTemplateButton,
    },

    { text: 'Short Text', datafield: 'shorttext' },
    { text: 'Short Text 1', datafield: 'shorttext1' },
    { text: 'Short Text 2', datafield: 'shorttext2' },
    { text: 'Short Text 3', datafield: 'shorttext3' },
  ];

  ngOnInit() {
    const temp = [
      {
        id: 1,
        longtext:
          'asleifuha lsieufhalsiefuhal \n seflaiseuhfla lseifuahlsieuf \n\r laisue fhalisuhefla isuefhl aisuefhl aisuehflaisuehflais euhflai suehlfia ushelfi ausehlfiausefhl kjaushfleiuh',
        shorttext:
          'asoeifuha seufhlaise fuhals eifuha lseifuh alseifu hasleifu',
        shorttext1:
          'asoeifuha seufhlaise fuhals eifuha lseifuh alseifu hasleifu',
        shorttext2:
          'asoeifuha seufhlaise fuhals eifuha lseifuh alseifu hasleifu',
        shorttext3:
          'asoeifuha seufhlaise fuhals eifuha lseifuh alseifu hasleifu',
      },
      {
        id: 1,
        longtext: 'asleifuha lsieufhalsiefuhal seflaiseuhfla lseifuahlsieuf',
        shorttext: 'lseifuh alseifu hasleifu',
        shorttext1: 'lseifuh alseifu hasleifu',
        shorttext2: 'lseifuh alseifu hasleifu',
        shorttext3: 'lseifuh alseifu hasleifu',
      },
    ];

    for (let i = 0; i < 5; i++) {
      for (let list of temp) {
        this.source.localdata.push(list);
      }
    }
  }
  excelBtnOnClick() {
    this.myGrid.exportview('xlsx', 'jqxGrid');
  }
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
}
