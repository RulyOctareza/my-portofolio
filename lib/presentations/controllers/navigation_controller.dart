import 'package:flutter/material.dart';
import 'package:get/get.dart';

class NavigationController extends GetxController {
  final ScrollController scrollController = ScrollController();

  // Store section keys to scroll to
  final aboutKey = GlobalKey();
  final experienceKey = GlobalKey();
  final skillsKey = GlobalKey();
  final projectsKey = GlobalKey();
  final contactKey = GlobalKey();

  // Scroll to specific section
  void scrollToSection(String section) {
    GlobalKey targetKey;

    switch (section) {
      case 'about':
        targetKey = aboutKey;
        break;
      case 'experience':
        targetKey = experienceKey;
        break;
      case 'skills':
        targetKey = skillsKey;
        break;
      case 'projects':
        targetKey = projectsKey;
        break;
      case 'contact':
        targetKey = contactKey;
        break;
      default:
        return;
    }

    final context = targetKey.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeInOut,
      );
    }
  }
}
