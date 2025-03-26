import 'package:get/get.dart';
import 'package:my_portofolio/data/repositories/project_repositories_impl.dart';
import 'package:my_portofolio/domain/usecase/get_projects.dart';
import 'package:my_portofolio/domain/entites/project.dart';

class ProjectController extends GetxController {
  final GetProjects _getProjects = GetProjects(ProjectRepositoryImpl());

  final RxList<Project> projects = <Project>[].obs;
  final RxInt currentIndex = 0.obs;

  @override
  void onInit() {
    super.onInit();
    loadProjects();
  }

  void loadProjects() {
    projects.value = _getProjects.execute();
  }

  void changeProject(int index) {
    currentIndex.value = index;
  }
}
