import 'package:get/get.dart';
import 'package:my_portofolio/data/repositories/experience_repositories_impl.dart';
import 'package:my_portofolio/domain/entites/experience.dart';
import 'package:my_portofolio/domain/usecase/get_experiences.dart';

class ExperienceController extends GetxController {
  final GetExperiences _getExperiences = GetExperiences(
    ExperienceRepositoryImpl(),
  );

  final RxList<Experience> experiences = <Experience>[].obs;

  @override
  void onInit() {
    super.onInit();
    loadExperiences();
  }

  void loadExperiences() {
    experiences.value = _getExperiences.execute();
  }
}
