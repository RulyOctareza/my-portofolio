import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);
    final theme = Theme.of(context).textTheme;
    final String whatsapp = 'https://wa.me/6281319577004';

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48),
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          children: [
            Text(
              textAlign: TextAlign.center,
              'Contact Me',
              style: theme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
            ),

            const SizedBox(height: 32),
            ResponsiveRowColumn(
              layout:
                  isMobile
                      ? ResponsiveRowColumnType.COLUMN
                      : ResponsiveRowColumnType.ROW,
              rowCrossAxisAlignment: CrossAxisAlignment.start,
              columnCrossAxisAlignment: CrossAxisAlignment.start,
              rowSpacing: 48,
              columnSpacing: 32,
              children: [
                ResponsiveRowColumnItem(
                  rowFlex: 1,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Get in Touch',
                        style: theme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      Container(
                        constraints: const BoxConstraints(maxWidth: 500),
                        child: Text(
                          'Feel free to reach out to me for any questions or opportunities!',
                          style: theme.bodyMedium?.copyWith(height: 1.5),
                        ),
                      ),
                      const SizedBox(height: 24),
                      _buildContactInfo(
                        context,
                        Icons.email,
                        'Email',
                        'rulyoctareza@gmail.com',
                      ),
                      const SizedBox(height: 16),
                      _buildContactInfo(
                        context,
                        Icons.phone,
                        'Phone',
                        '+62 813 1957 7004',
                      ),
                      const SizedBox(height: 16),
                      _buildContactInfo(
                        context,
                        Icons.location_on,
                        'Location',
                        'East Java, Indonesia',
                      ),
                      const SizedBox(height: 32),
                      Container(
                        width: double.infinity,
                        constraints: const BoxConstraints(maxWidth: 300),
                        child: Wrap(
                          spacing: 12,
                          runSpacing: 12,
                          children: [
                            _buildSocialIcon(Icons.link),
                            _buildSocialIcon(Icons.code),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                ResponsiveRowColumnItem(
                  rowFlex: 1,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        "Let's Work Together",
                        style: theme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      Container(
                        constraints: const BoxConstraints(maxWidth: 500),
                        child: Text(
                          "I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.",
                          style: theme.bodyMedium?.copyWith(height: 1.5),
                        ),
                      ),
                      const SizedBox(height: 24),
                      SizedBox(
                        width: isMobile ? double.infinity : 200,
                        child: ElevatedButton.icon(
                          onPressed: () {
                            _launchUrl(whatsapp);
                          },
                          icon: const Icon(Icons.mail_outline),
                          label: Text('Contact Me', style: theme.labelLarge),
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.symmetric(vertical: 16),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    if (!await launchUrl(Uri.parse(url))) {
      throw Exception('Could not launch $url');
    }
  }

  Widget _buildContactInfo(
    BuildContext context,
    IconData icon,
    String title,
    String content,
  ) {
    final theme = Theme.of(context).textTheme;
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, color: Theme.of(context).primaryColor),
        const SizedBox(width: 16),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: theme.bodyLarge?.copyWith(fontWeight: FontWeight.bold),
              ),
              Text(
                content,
                overflow: TextOverflow.ellipsis,
                style: theme.bodyMedium,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSocialIcon(IconData icon) {
    return Container(
      margin: const EdgeInsets.only(right: 8, bottom: 8),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(8),
      ),
      child: IconButton(
        icon: Icon(icon, color: Colors.white, size: 20),
        onPressed: () {},
        constraints: const BoxConstraints.tightFor(width: 40, height: 40),
        padding: EdgeInsets.zero,
      ),
    );
  }
}
