import { Component, OnInit } from '@angular/core';
import internal from 'stream';
import { MenuService } from './service/menu.service';
import { response } from 'express';
import { error } from 'console';
import { ImageUrlPipe } from '../../Piprs/image-url.pipe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})

export class MenuComponent implements OnInit {

  hospitals: CreateHospitalCommand[] = [];
  imageData: DocumentType[] = [];
  doctorData: Doctor[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.getAllData();
    this.getAllImages();
    this.getAllDoctors();
  }

  async getAllData() {
    (await this.menuService.getHospital()).subscribe(response => {
      this.hospitals = response;
    });
  }

  getAllImages() {
    (this.menuService.getAllImage()).subscribe(response => {
      this.imageData = response;
      console.log(this.imageData);
    });
  }

  getAllDoctors() {
    (this.menuService.getAllDoctors()).subscribe(response => {
      this.doctorData = response;
      console.log(this.doctorData);
    });
  }




  // async ngOnInit() {
  //   (this.menuService.getHospital()).subscribe(
  //     {
  //       next: (response) => {
  //         this.hospitals = response;
  //         console.log(this.hospitals)
  //       },
  //       error: (error) => {
  //         console.log(error)
  //       }
  //     },
  //   )
  // }

  postDataHelp() {
    let inputFullName = document.querySelector('#inputFullName') as HTMLInputElement;
    let inputPhoneNumber = document.querySelector('#inputPhoneNumber') as HTMLInputElement;
    let inputGdeZabirat = document.querySelector('#inputGdeZabirat') as HTMLInputElement;
    let inputOtChevoLechit = document.querySelector('#inputOtChevoLechit') as HTMLInputElement;
    let inputKomuNujnaPomoch = document.querySelector('#inputKomuNujnaPomoch') as HTMLInputElement;

    let data: CreateHelpCommand = {
      FullName: inputFullName.value,
      PhoneNumber: inputPhoneNumber.value,
      WhoNeedsHelp: inputKomuNujnaPomoch.value,
      WhereToPickUp: inputGdeZabirat.value,
      WhatToTreatFor: inputOtChevoLechit.value
    };

    this.menuService.postDataHelp(data).subscribe(
      (response) => {
        alert('Added')
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  postDataAnswerAndQuestion() {
    let inputFullName = document.querySelector('#inputFullName1') as HTMLInputElement;
    let inputPhoneNumber = document.querySelector('#inputPhoneNumber1') as HTMLInputElement;

    let data: CreateAnswerAndQuestionCommand = {
      FullName: inputFullName.value,
      PhoneNumber: inputPhoneNumber.value,
    }

    this.menuService.postDataAnswerAndQuestion(data).subscribe(
      (response) => {
        alert('Added')
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }




  ngAfterViewInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

}

export interface CreateHelpCommand {
  FullName: string | null
  PhoneNumber: string | null
  WhoNeedsHelp: string | null
  WhatToTreatFor: string | null
  WhereToPickUp: string | null
}

export interface CreateAnswerAndQuestionCommand {
  FullName: string | null
  PhoneNumber: string | null
}

export interface CreateHospitalCommand {
  hospitalId: number
  hospitalName: string
  phoneNumber: string
  workingTime: string
  location: string
  openedYear: number
  telegramUrl: string
  instagramUrl: string
  facebookUrl: string
  wContaceUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface DocumentType {
  documentId: number,
  documentPath: string,
  documentType: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface Doctor {
  doctorId: number,
  fullName: string,
  doctorCategory: string,
  experience: number,
  phoneNumber: string,
  imagePath: string,
  birthDate: Date
}