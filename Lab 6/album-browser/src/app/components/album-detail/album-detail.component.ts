import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  editTitle = '';
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.editTitle = data.title;
      this.loading = false;
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saved = true;
      setTimeout(() => this.saved = false, 2000);
    });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album!.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
