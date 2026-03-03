import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

const KZ_TITLES = [
  'Таң атқанда', 'Көл жағасы', 'Дала кеші', 'Той думаны', 'Күн батысы',
  'Тау шыңы', 'Серуен', 'Достармен', 'Отбасы', 'Балалық шақ',
  'Мереке', 'Күз түсі', 'Жаз жайлауы', 'Қыс қызығы', 'Көктем гүлі',
  'Ауыл көрінісі', 'Қала шуы', 'Кеш батқанда', 'Жол үстінде', 'Мәз-мейрам',
];

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
      this.photos = data.slice(0, 20).map((p, i) => ({
        ...p,
        thumbnailUrl: `https://picsum.photos/seed/${p.id}/150/150`,
        title: KZ_TITLES[i % KZ_TITLES.length]
      }));
      this.loading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}