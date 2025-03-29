import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_portofolio/presentations/controllers/theme_controller.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Header extends StatelessWidget {
  final Function(String) onMenuTap;

  const Header({super.key, required this.onMenuTap});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(DESKTOP);
    final themeController = Get.find<ThemeController>();

    return Container(
      height: 80,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: Theme.of(context).appBarTheme.backgroundColor,
        boxShadow: const [
          BoxShadow(
            color: Colors.black12,
            blurRadius: 8,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Logo/Title with overflow protection
          Flexible(
            child: Text(
              '< Reza Dev />',
              style: TextStyle(
                fontSize: isMobile ? 20 : 24,
                fontWeight: FontWeight.bold,
                color: Theme.of(context).primaryColor,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          Row(
            children: [
              // Theme toggle button
              Obx(
                () => IconButton(
                  icon: Icon(
                    themeController.isDarkMode.value
                        ? Icons.light_mode
                        : Icons.dark_mode,
                    color: Theme.of(context).iconTheme.color,
                  ),
                  onPressed: () {
                    themeController.toggleTheme();
                  },
                  tooltip: themeController.isDarkMode.value
                      ? 'Switch to Light Mode'
                      : 'Switch to Dark Mode',
                ),
              ),
              // Navigation menu
              if (!isMobile)
                Row(
                  children: [
                    _buildNavItem(context, 'About', () => onMenuTap('about')),
                    _buildNavItem(
                      context,
                      'Experience',
                      () => onMenuTap('experience'),
                    ),
                    _buildNavItem(context, 'Skills', () => onMenuTap('skills')),
                    _buildNavItem(
                      context,
                      'Projects',
                      () => onMenuTap('projects'),
                    ),
                    _buildNavItem(
                      context,
                      'Contact',
                      () => onMenuTap('contact'),
                    ),
                  ],
                )
              else
                IconButton(
                  icon: Icon(
                    Icons.menu,
                    color: Theme.of(context).iconTheme.color,
                  ),
                  onPressed: () {
                    _showMobileMenu(context);
                  },
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(),
                ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem(BuildContext context, String title, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        child: Text(
          title,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w500,
            color: Theme.of(context).textTheme.bodyLarge?.color,
          ),
        ),
      ),
    );
  }

  void _showMobileMenu(BuildContext context) {
    showModalBottomSheet(
      context: context,
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      builder: (context) {
        return SafeArea(
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 16),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                ListTile(
                  title: Text(
                    'About',
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyLarge?.color,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    onMenuTap('about');
                  },
                ),
                ListTile(
                  title: Text(
                    'Experience',
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyLarge?.color,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    onMenuTap('experience');
                  },
                ),
                ListTile(
                  title: Text(
                    'Skills',
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyLarge?.color,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    onMenuTap('skills');
                  },
                ),
                ListTile(
                  title: Text(
                    'Projects',
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyLarge?.color,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    onMenuTap('projects');
                  },
                ),
                ListTile(
                  title: Text(
                    'Contact',
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyLarge?.color,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    onMenuTap('contact');
                  },
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
