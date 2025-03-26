import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_portofolio/presentations/controllers/experiences_controller.dart';
import 'package:my_portofolio/presentations/widgets/card/experience_card.dart';

class ExperienceSection extends StatelessWidget {
  final ExperienceController controller = Get.put(ExperienceController());

  ExperienceSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            'Experience',
            style: TextStyle(
              fontSize: 32,
              fontWeight: FontWeight.bold,
              color: Theme.of(context).textTheme.titleLarge?.color,
            ),
          ),
          const SizedBox(height: 32),
          Obx(() {
            if (controller.experiences.isEmpty) {
              return Center(
                child: CircularProgressIndicator(
                  color: Theme.of(context).primaryColor,
                ),
              );
            }

            return Column(
              children:
                  controller.experiences
                      .map(
                        (experience) => Padding(
                          padding: const EdgeInsets.only(bottom: 16),
                          child: ExperienceCard(experience: experience),
                        ),
                      )
                      .toList(),
            );
          }),
        ],
      ),
    );
  }
}
