import { Component, Input, input } from '@angular/core';
import { CreateHospitalCommand } from '../menu/menu.component';

@Component({
  selector: 'app-menu-input',
  templateUrl: './menu-input.component.html',
  styleUrl: './menu-input.component.css'
})
export class MenuInputComponent {
  @Input()
  hospital!: CreateHospitalCommand;
}

/*
= {
    CreatedAt: new Date,
    FacebookUrl: "",
    HospitalId: 1,
    HospitalName: '',
    InstagramUrl: "",
    Location: '',
    OpenedYear: 1,
    PhoneNumber: '+998900074272',
    TelegramUrl: '',
    UpdatedAt: new Date,
    WContaceUrl: '',
    WorkingTime: '',
  } */