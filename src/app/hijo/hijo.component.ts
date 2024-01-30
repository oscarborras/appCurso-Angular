import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
/*
export class HijoComponent {
  public aviso: string = 'Este texto proviene del componente hijo';

}*/

export class HijoComponent implements OnInit {
  @Input() aviso !: string;
  
  constructor() { }
  ngOnInit() {  }
}

