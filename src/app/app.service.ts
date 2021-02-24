import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    apiUrl;
    query;
    constructor(private httpClient: HttpClient) { }

    sendGetRequest(aux) {
        this.query = `"query": {"match": {"title": {"query": "${aux}","fuzziness": "AUTO","fuzzy_transpositions": "true"}}}`;
        this.apiUrl = `https://elastic:mDvpsCmv0ZqVYMGKYoVi2TDD@c1f842c9b6b246368e56d7209a9be4da.us-east-1.aws.found.io:9243/netflix/_search?source_content_type=application/json&source={${this.query}}`;

       return this.httpClient.get(this.apiUrl);
    }

}