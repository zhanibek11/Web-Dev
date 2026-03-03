import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

const MOCK_ALBUMS: Album[] = [
  { id: 1, userId: 1, title: 'Жазғы демалыс 2023' },
  { id: 2, userId: 1, title: 'Әлімнің туған күні' },
  { id: 3, userId: 2, title: 'Таулы сапар' },
  { id: 4, userId: 2, title: 'Жаңа жыл кеші' },
  { id: 5, userId: 3, title: 'Бітіру кеші' },
  { id: 6, userId: 3, title: 'Айгүл мен Данияр тойы' },
  { id: 7, userId: 4, title: 'Демалыс Түркияда' },
  { id: 8, userId: 4, title: 'Қала серуені' },
  { id: 9, userId: 5, title: 'Паркте концерт' },
  { id: 10, userId: 5, title: 'Отбасылық пикник' },
];

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private albums: Album[] = [...MOCK_ALBUMS];

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }

  getAlbum(id: number): Observable<Album> {
    return of(this.albums.find(a => a.id === id)!);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    const i = this.albums.findIndex(a => a.id === album.id);
    if (i !== -1) this.albums[i] = album;
    return of(album);
  }

  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id);
    return of(void 0);
  }
}
