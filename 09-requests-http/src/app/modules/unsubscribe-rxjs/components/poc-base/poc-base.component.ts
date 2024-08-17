import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-base',
  standalone: true,
  imports: [],
  templateUrl: './poc-base.component.html',
  styleUrl: './poc-base.component.scss',
})
export class PocBaseComponent implements OnInit {
  @Input() nome!: string | Observable<string>;
  @Input() valor!: string;
  @Input() estilo!: string;

  constructor() {}

  ngOnInit() {}
}
