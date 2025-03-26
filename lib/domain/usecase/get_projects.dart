
import 'package:my_portofolio/domain/entites/project.dart';
import 'package:my_portofolio/domain/repository/project_repository.dart';

class GetProjects {
  final ProjectRepository repository;

  GetProjects(this.repository);

  List<Project> execute() {
    return repository.getProjects();
  }
}
