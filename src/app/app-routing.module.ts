import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'participant/home', loadChildren: () => import('./participant/home/home.module').then(m => m.HomeModule) },
  { path: 'admin/home', loadChildren: () => import('./admin/home/home.module').then(m => m.HomeModule) },
  { path: 'participant/program-belajar', loadChildren: () => import('./participant/program-belajar/program-belajar.module').then(m => m.ProgramBelajarModule) },
  { path: 'admin/program-belajar', loadChildren: () => import('./admin/program-belajar/program-belajar.module').then(m => m.ProgramBelajarModule) },
  { path: 'admin/tambah-pb', loadChildren: () => import('./admin/tambah-pb/tambah-pb.module').then(m => m.TambahPbModule) },
  { path: 'admin/detail-pb', loadChildren: () => import('./admin/detail-pb/detail-pb.module').then(m => m.DetailPbModule) },
  { path: 'admin/edit-pb', loadChildren: () => import('./admin/edit-pb/edit-pb.module').then(m => m.EditPbModule) },
  { path: 'admin/tambah-materi', loadChildren: () => import('./admin/tambah-materi/tambah-materi.module').then(m => m.TambahMateriModule) },
  { path: 'admin/tambah-tugas', loadChildren: () => import('./admin/tambah-tugas/tambah-tugas.module').then(m => m.TambahTugasModule) },
  { path: 'admin/tambah-evaluasi', loadChildren: () => import('./admin/tambah-evaluasi/tambah-evaluasi.module').then(m => m.TambahEvaluasiModule) },
  { path: 'participant/detail-pb', loadChildren: () => import('./participant/detail-pb/detail-pb.module').then(m => m.DetailPbModule) },
  { path: 'diskusi', loadChildren: () => import('./diskusi/diskusi.module').then(m => m.DiskusiModule) },
  { path: 'admin/tugas', loadChildren: () => import('./admin/tugas/tugas.module').then(m => m.TugasModule) },
  { path: 'participant/tugas', loadChildren: () => import('./participant/tugas/tugas.module').then(m => m.TugasModule) },
  { path: 'participant/tugas-soal', loadChildren: () => import('./participant/tugas-soal/tugas-soal.module').then(m => m.TugasSoalModule) },
  { path: 'admin/tambah-tugas-pg', loadChildren: () => import('./admin/tambah-tugas-pg/tambah-tugas-pg.module').then(m => m.TambahTugasPgModule) },
  { path: 'admin/tambah-tugas-essay', loadChildren: () => import('./admin/tambah-tugas-essay/tambah-tugas-essay.module').then(m => m.TambahTugasEssayModule) },
  { path: 'admin/edit-tugas-pg', loadChildren: () => import('./admin/edit-tugas-pg/edit-tugas-pg.module').then(m => m.EditTugasPgModule) },
  { path: 'admin/edit-tugas-essay', loadChildren: () => import('./admin/edit-tugas-essay/edit-tugas-essay.module').then(m => m.EditTugasEssayModule) },
  { path: 'admin-risnov/home', loadChildren: () => import('./admin-risnov/home/home.module').then(m => m.HomeModule) },
  { path: 'admin/program-andalan', loadChildren: () => import('./admin/program-andalan/program-andalan.module').then(m => m.ProgramAndalanModule) },
  { path: 'admin-unit-kerja/home', loadChildren: () => import('./admin-unit-kerja/home/home.module').then(m => m.HomeModule) },
  { path: 'admin/tambah-pa', loadChildren: () => import('./admin/tambah-pa/tambah-pa.module').then(m => m.TambahPaModule) },
  { path: 'admin-unit-kerja/tambah-pa', loadChildren: () => import('./admin-unit-kerja/tambah-pa/tambah-pa.module').then(m => m.TambahPaModule) },
  { path: 'participant/program-andalan', loadChildren: () => import('./participant/program-andalan/program-andalan.module').then(m => m.ProgramAndalanModule) },
  { path: 'participant/program-andalan-terbit', loadChildren: () => import('./participant/hal-pa-terbit/hal-pa-terbit.module').then(m => m.HalPaTerbitModule) },
  { path: 'admin-risnov/detail-pa', loadChildren: () => import('./admin-risnov/detail-pa/detail-pa.module').then(m => m.DetailPaModule) },
  { path: 'admin-risnov/penolakan', loadChildren: () => import('./admin-risnov/penolakan/penolakan.module').then(m => m.PenolakanModule) },
  { path: 'participant/proyek-pengembangan', loadChildren: () => import('./participant/proyek-pengembangan/proyek-pengembangan.module').then(m => m.ProyekPengembanganModule) },
  { path: 'admin/proyek-pengembangan', loadChildren: () => import('./admin/proyek-pengembangan/proyek-pengembangan.module').then(m => m.ProyekPengembanganModule) },
  { path: 'admin/tambah-pp', loadChildren: () => import('./admin/tambah-pp/tambah-pp.module').then(m => m.TambahPpModule) },
  { path: 'participant/proyek-pengembangan-terbit', loadChildren: () => import('./participant/hal-pp-terbit/hal-pp-terbit.module').then(m => m.HalPpTerbitModule) },
  { path: 'admin-risnov/proyek-pengembangan', loadChildren: () => import('./admin-risnov/proyek-pengembangan/proyek-pengembangan.module').then(m => m.ProyekPengembanganModule) },
  { path: 'admin-risnov/detail-pp', loadChildren: () => import('./admin-risnov/detail-pp/detail-pp.module').then(m => m.DetailPpModule) },
  { path: 'admin/edit-pp', loadChildren: () => import('./admin/edit-pp/edit-pp.module').then(m => m.EditPpModule) },
  { path: 'admin/opl', loadChildren: () => import('./admin/opl/opl.module').then(m => m.OplModule) },
  { path: 'admin-risnov/opl', loadChildren: () => import('./admin-risnov/opl/opl.module').then(m => m.OplModule) },
  { path: 'admin-risnov/detail-opl', loadChildren: () => import('./admin-risnov/detail-opl/detail-opl.module').then(m => m.DetailOplModule) },
  { path: 'admin/detail-opl', loadChildren: () => import('./admin/detail-opl/detail-opl.module').then(m => m.DetailOplModule) },
  { path: 'participant/opl', loadChildren: () => import('./participant/opl/opl.module').then(m => m.OplModule) },
  { path: 'participant/tambah-opl', loadChildren: () => import('./participant/tambah-opl/tambah-opl.module').then(m => m.TambahOplModule) },
  { path: 'admin-risnov/tambah-pa', loadChildren: () => import('./admin-risnov/tambah-pa/tambah-pa.module').then(m => m.TambahPaModule) },
  { path: 'participant/edit-opl', loadChildren: () => import('./participant/edit-opl/edit-opl.module').then(m => m.EditOplModule) },
  { path: 'admin-risnov/tambah-sp', loadChildren: () => import('./admin-risnov/tambah-sp/tambah-sp.module').then(m => m.TambahSpModule) },
  { path: 'admin-risnov/sp', loadChildren: () => import('./admin-risnov/sp/sp.module').then(m => m.SpModule) },
  { path: 'admin-risnov/edit-sp', loadChildren: () => import('./admin-risnov/edit-sp/edit-sp.module').then(m => m.EditSpModule) },
  { path: 'admin/sp', loadChildren: () => import('./admin/sp/sp.module').then(m => m.SpModule) },
  { path: 'admin/tambah-sp', loadChildren: () => import('./admin/tambah-sp/tambah-sp.module').then(m => m.TambahSpModule) },
  { path: 'admin/edit-sp', loadChildren: () => import('./admin/edit-sp/edit-sp.module').then(m => m.EditSpModule) },
  { path: 'admin-risnov/kp', loadChildren: () => import('./admin-risnov/kp/kp.module').then(m => m.KpModule) },
  { path: 'admin-risnov/tambah-kp', loadChildren: () => import('./admin-risnov/tambah-kp/tambah-kp.module').then(m => m.TambahKpModule) },
  { path: 'admin-risnov/edit-kp', loadChildren: () => import('./admin-risnov/edit-kp/edit-kp.module').then(m => m.EditKpModule) },
  { path: 'admin/kp', loadChildren: () => import('./admin/kp/kp.module').then(m => m.KpModule) },
  { path: 'admin/tambah-kp', loadChildren: () => import('./admin/tambah-kp/tambah-kp.module').then(m => m.TambahKpModule) },
  { path: 'admin/edit-kp', loadChildren: () => import('./admin/edit-kp/edit-kp.module').then(m => m.EditKpModule) },
  { path: 'admin/materi', loadChildren: () => import('./admin/materi/materi.module').then(m => m.MateriModule) },
  { path: 'admin/monitor-tugas', loadChildren: () => import('./admin/monitor-tugas/monitor-tugas.module').then(m => m.MonitorTugasModule) },
  { path: 'admin/monitor-tugas-essay', loadChildren: () => import('./admin/monitor-tugas-essay/monitor-tugas-essay.module').then(m => m.MonitorTugasEssayModule) },
  { path: 'admin/penilaian', loadChildren: () => import('./admin/penilaian/penilaian.module').then(m => m.PenilaianModule) },
  { path: 'admin/evaluasi', loadChildren: () => import('./admin/evaluasi/evaluasi.module').then(m => m.EvaluasiModule) },
  { path: 'admin-risnov/evaluasi', loadChildren: () => import('./admin-risnov/evaluasi/evaluasi.module').then(m => m.EvaluasiModule) },
  { path: 'admin/i-evaluate', loadChildren: () => import('./admin/i-evaluate/i-evaluate.module').then(m => m.IEvaluateModule) },
  { path: 'admin/tambah-ie', loadChildren: () => import('./admin/tambah-ie/tambah-ie.module').then(m => m.TambahIeModule) },
  { path: 'admin/edit-ie', loadChildren: () => import('./admin/edit-ie/edit-ie.module').then(m => m.EditIeModule) },
  { path: 'admin/detail-ie', loadChildren: () => import('./admin/detail-ie/detail-ie.module').then(m => m.DetailIeModule) },
  { path: 'admin/tambah-survey', loadChildren: () => import('./admin/tambah-survey/tambah-survey.module').then(m => m.TambahSurveyModule) },
  { path: 'participant/i-evaluate', loadChildren: () => import('./participant/i-evaluate/i-evaluate.module').then(m => m.IEvaluateModule) },
  { path: 'participant/hal-survey', loadChildren: () => import('./participant/hal-survey/hal-survey.module').then(m => m.HalSurveyModule) },
  { path: 'participant/survey', loadChildren: () => import('./participant/survey/survey.module').then(m => m.SurveyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
