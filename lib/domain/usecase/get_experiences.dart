import 'package:my_portofolio/domain/entites/experience.dart';
import 'package:my_portofolio/domain/repository/experience_repository.dart';

class GetExperiences {
  final ExperienceRepository repository;

  GetExperiences(this.repository);

  List<Experience> execute() {
    return repository.getExperiences();
  }
}
