import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:my_portofolio/presentations/controllers/navigation_controller.dart';
import 'package:my_portofolio/presentations/controllers/theme_controller.dart'
    show ThemeController, darkTheme, lightTheme;
import 'package:my_portofolio/presentations/pages/portofolio_page.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() async {
  await GetStorage.init();

  Get.put(NavigationController());
  Get.put(ThemeController());

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();

    return GetMaterialApp(
      title: 'Reza Dev Portofolio',
      debugShowCheckedModeBanner: false,
      themeMode: themeController.themeMode,
      theme: lightTheme,
      darkTheme: darkTheme,
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: child!,
        breakpoints: [
          const Breakpoint(start: 0, end: 800, name: MOBILE),
          // const Breakpoint(start: 451, end: 800, name: TABLET),
          const Breakpoint(start: 801, end: 1920, name: DESKTOP),
          const Breakpoint(start: 1921, end: double.infinity, name: '4K'),
        ],
      ),
      home: const PortfolioPage(),
    );
  }
}
