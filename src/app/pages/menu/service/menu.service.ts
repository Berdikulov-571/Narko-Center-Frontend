import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateAnswerAndQuestionCommand, CreateHelpCommand, CreateHospitalCommand, Doctor, DocumentType } from '../menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  private helpUrl = 'https://localhost:7106/api/Help/';
  private answerAndQuestionUrl = "https://localhost:7106/api/AnswerAndQuestion/";
  private hospitalUrl = 'https://localhost:7106/api/Hospital/'
  private imageDataUrl = 'https://localhost:7106/api/Document/';
  private doctorUrl = 'https://localhost:7106/api/Doctor/'

  getHospital(): Observable<CreateHospitalCommand[]> {
    return this.httpClient.get<CreateHospitalCommand[]>(this.hospitalUrl + "GetAll");
  }

  postDataHelp(data: CreateHelpCommand): Observable<CreateHelpCommand> {
    return this.httpClient.post<CreateHelpCommand>(this.helpUrl + "Create", data);
  }

  postDataAnswerAndQuestion(data: CreateAnswerAndQuestionCommand): Observable<CreateAnswerAndQuestionCommand> {
    return this.httpClient.post<CreateAnswerAndQuestionCommand>(this.answerAndQuestionUrl + "Create", data);
  }

  getAllImage(): Observable<DocumentType[]> {
    return this.httpClient.get<DocumentType[]>(this.imageDataUrl + "GetAll");
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.doctorUrl + "GetAll");
  }

}