<?php

namespace Database\Seeders;

use App\Enums\BlogPostStatus;
use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class LegacyBlogPostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $author = User::query()->role('super_admin')->first() ?: User::query()->first();

        if (! $author) {
            return;
        }

        $publishedAt = Carbon::parse('2026-04-08 09:00:00');

        $posts = [
            [
                'slug' => 'are-we-pushing-ev-adoption-too-early-in-indias-transport-ecosystem',
                'title' => 'Are We Pushing EV Adoption Too Early in India’s Transport Ecosystem?',
                'excerpt' => 'On paper, EVs look perfect. On Indian roads, the reality is very different.',
                'category' => 'EV Mobility',
                'featured_image_path' => '/images/blogs/blog_ev.jpeg',
                'content' => [
                    'heading' => 'Ground Reality vs EV Promise',
                    'blocks' => [
                        ['type' => 'paragraph', 'text' => 'Let’s keep it real.'],
                        ['type' => 'paragraph', 'text' => 'Even today, CNG stations in India still have long queues, waiting times, and availability issues. Drivers lose time. Routes get disrupted. Operations suffer.'],
                        ['type' => 'paragraph', 'text' => 'And this is a system that has existed for years. Now look at EVs:'],
                        ['type' => 'list', 'items' => [
                            'Limited charging stations (many non-functional)',
                            'Long charging hours',
                            'Uncertain real-world range',
                            'Uncertain power supply in summer season',
                            'Overload power grid/Power-cut',
                        ]],
                        ['type' => 'paragraph', 'text' => 'For a transporter, this is not inconvenience.'],
                        ['type' => 'paragraph', 'text' => 'It is a direct hit on efficiency and profitability.'],
                        ['type' => 'paragraph', 'text' => 'Now let’s talk numbers.'],
                        ['type' => 'paragraph', 'text' => 'Charging costs (India 2025–26):'],
                        ['type' => 'list', 'items' => [
                            '₹12–₹25 per unit (public charging)',
                        ]],
                        ['type' => 'paragraph', 'text' => 'Yes, running cost is low: ₹2.5 per km, but here is the real problem:'],
                        ['type' => 'list', 'items' => [
                            'EVs are expensive to buy',
                            'Higher capital investment',
                            'Same route payouts',
                            'Lower returns per km for transporters',
                        ]],
                        ['type' => 'paragraph', 'text' => 'So while EVs look economical, the business model does not always work on ground.'],
                        ['type' => 'paragraph', 'text' => 'Now the part most people ignore:'],
                        ['type' => 'paragraph', 'text' => 'EVs are not completely clean.'],
                        ['type' => 'paragraph', 'text' => 'Vehicle Whole Life Carbon Emissions Analysis:'],
                        ['type' => 'list', 'items' => [
                            'Gasoline - 24 | 23% | 5.6',
                            'Hybrid - 21 | 31% | 6.5',
                            'EV - 19 | 46% | 8.8',
                        ]],
                        ['type' => 'list', 'items' => [
                            'Up to 46% emissions come from production',
                            'Battery manufacturing adds high carbon load',
                            'Production emissions (~8.8t CO2e) > gasoline (~5.6t CO2e)',
                        ]],
                        ['type' => 'paragraph', 'text' => '(Source: earth.org)'],
                        ['type' => 'paragraph', 'text' => 'So the real question is:'],
                        ['type' => 'paragraph', 'text' => 'Are we evaluating EVs fully, or just focusing on tailpipe emissions? And this is not just India.'],
                        ['type' => 'paragraph', 'text' => 'Globally, some of the biggest names have already started stepping back:'],
                        ['type' => 'list', 'items' => [
                            'Honda reviewing its EV plans after major losses',
                            'Volvo moving away from full EV commitments',
                            'Apple shutting down its EV project',
                            'Dyson exiting due to lack of commercial viability',
                            'Ford, Nissan, Stellantis slowing down investments',
                            'Mercedes-Benz and Porsche shifting focus back to hybrids',
                        ]],
                        ['type' => 'paragraph', 'text' => 'If global players are recalibrating, are we moving too fast without infrastructure?'],
                        ['type' => 'paragraph', 'text' => 'For Indian transporters:'],
                        ['type' => 'list', 'items' => [
                            'Limited options (mostly Tata EVs)',
                            'High upfront cost',
                            'Range challenges',
                            'Charging downtime',
                            'Weak infrastructure',
                        ]],
                        ['type' => 'paragraph', 'text' => 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we believe EV is the future. But the transition must be practical, scalable, and sustainable. Because in transportation, decisions are not made on trends. They are made on what works every single day on Indian roads.'],
                    ],
                ],
            ],
            [
                'slug' => 'ev-push-by-mncs-green-vision-vs-ground-reality',
                'title' => 'EV Push by MNCs: Green Vision vs Ground Reality',
                'excerpt' => 'The EV shift in employee transportation is progressive in intent, but the on-ground challenges for transport partners remain significant.',
                'category' => 'EV Mobility',
                'featured_image_path' => '/images/blogs/ev_push.jpeg',
                'content' => [
                    'heading' => 'Challenges Behind the EV Transition',
                    'blocks' => [
                        ['type' => 'paragraph', 'text' => 'The shift towards electric vehicles (EVs) in employee transportation by MNCs in India is a welcome step in the direction of sustainability and reduced carbon footprint. The transition to EVs for their transport partners, while the intent is progressive, the ground reality presents several challenges that need careful consideration as observed by DTC BHARAT - Delphinium Travelcorp Private Limited) Management.'],
                        ['type' => 'paragraph', 'text' => '1. High Initial Investment:EVs come with a significantly higher upfront cost compared to CNG vehicles. For transport vendors and fleet operators, especially small and mid-sized businesses, this becomes a major financial burden without adequate subsidies or assured long-term contracts.'],
                        ['type' => 'paragraph', 'text' => '2. Charging Infrastructure Constraints:The availability of reliable and fast-charging infrastructure is still limited in many cities. Unlike CNG, where refuelling is relatively quicker and more accessible, EV charging requires time, planning, and infrastructure support—which is not yet uniformly available across operational zones.'],
                        ['type' => 'paragraph', 'text' => '3. Operational Downtime:Charging time directly impacts fleet utilization. A vehicle that spends several hours charging reduces daily trip capacity, affecting overall productivity and revenue for vendors.'],
                        ['type' => 'paragraph', 'text' => '4. Tariff Mismatch:One of the biggest concerns is that transport rates have not been revised proportionately to justify the higher cost of EV procurement and operations. Vendors are expected to invest more but are compensated at rates designed for traditional fuel vehicles.'],
                        ['type' => 'paragraph', 'text' => '5. Uncertain Residual Value & Battery Life: Unlike CNG or diesel vehicles, EVs have uncertainties around battery life, replacement costs, and resale value. This adds to the financial risk for fleet owners.'],
                        ['type' => 'paragraph', 'text' => '6. Policy vs Practicality Gap: While ESG goals and green initiatives are being aggressively pursued at the corporate level, the implementation often overlooks operational challenges faced by on-ground partners.'],
                        ['type' => 'paragraph', 'text' => 'The Way Forward:'],
                        ['type' => 'list', 'items' => [
                            'Revision of transport rates aligned with EV economics',
                            'Long-term contracts to ensure ROI for vendors',
                            'Investment support or leasing models for EV adoption',
                            'Development of dedicated charging hubs at client locations',
                            'Incentives and subsidies passed effectively to fleet operators',
                            'Sustainability is a shared responsibility.',
                        ]],
                        ['type' => 'paragraph', 'text' => 'For MNCs, transport partners, and policymakers, the goal should not just be to adopt EVs—but to build an ecosystem where the transition is practical, viable, and beneficial for all stakeholders involved.'],
                    ],
                ],
            ],
            [
                'slug' => 'womens-safety-in-corporate-transportation',
                'title' => 'Women’s Safety in Corporate Transportation',
                'excerpt' => 'A safe journey is not a privilege for women. It is a necessity and a responsibility every company must uphold.',
                'category' => 'Women Safety',
                'featured_image_path' => '/images/blogs/women_safety.jpeg',
                'content' => [
                    'heading' => 'Safety, Respect, and Responsibility',
                    'blocks' => [
                        ['type' => 'paragraph', 'text' => 'A safe journey is not a privilege for women. It is a necessity and a responsibility that every company must uphold.'],
                        ['type' => 'paragraph', 'text' => 'In today’s corporate environment, thousands of women professionals travel to and from workplaces every day, often during early morning or late night hours. Ensuring that these journeys are safe, secure, and reliable is not just a service requirement, it is a critical responsibility.'],
                        ['type' => 'paragraph', 'text' => 'At DTC BHARAT - Delphinium Travelcorp Private Limited), women’s safety is a fundamental priority in the way we design and manage our corporate transportation services.'],
                        ['type' => 'paragraph', 'text' => 'We believe that every woman professional should feel confident, respected, and protected during her commute, regardless of the time of travel.'],
                        ['type' => 'paragraph', 'text' => 'To strengthen this commitment, we regularly conduct awareness and training sessions focused on women safety, professional conduct, and strict zero tolerance policies for all operational staff and drivers.'],
                        ['type' => 'paragraph', 'text' => 'Our approach focuses on key safety principles:'],
                        ['type' => 'list', 'items' => [
                            'Promoting respectful and professional conduct at all times.',
                            'Ensuring heightened awareness and accountability among drivers and staff.',
                            'Enforcing strict zero tolerance towards any form of misconduct.',
                            'Building a transportation culture where safety, dignity, and trust are always prioritized.',
                        ]],
                        ['type' => 'paragraph', 'text' => 'For us, corporate mobility is not only about efficiency and punctuality. It is about creating an environment where women professionals can travel to work with complete peace of mind.'],
                        ['type' => 'paragraph', 'text' => 'Because a truly progressive workplace is one where every woman feels safe on her journey to success.'],
                    ],
                ],
            ],
            [
                'slug' => 'what-keeps-a-modern-company-moving-efficiently',
                'title' => 'What Keeps a Modern Company Moving Efficiently?',
                'excerpt' => 'A modern business runs better with mobility systems that are safe, reliable, and professionally managed.',
                'category' => 'Corporate Mobility',
                'featured_image_path' => '/images/blogs/cabs.jpeg',
                'content' => [
                    'heading' => 'Corporate Mobility That Keeps Business Moving',
                    'blocks' => [
                        ['type' => 'paragraph', 'text' => 'What keeps a modern company moving efficiently every single day? A mobility system that is safe, reliable, and professionally managed.'],
                        ['type' => 'paragraph', 'text' => 'In today’s fast paced corporate environment, transportation is no longer just a logistical requirement. It is a critical element that supports employee safety, operational continuity, punctuality, and overall productivity.'],
                        ['type' => 'paragraph', 'text' => 'Companies today require mobility solutions that are structured, dependable, and aligned with the expectations of modern business operations.'],
                        ['type' => 'paragraph', 'text' => 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we provide professionally managed corporate mobility solutions designed to support the diverse transportation needs of organizations.'],
                        ['type' => 'paragraph', 'text' => 'Our key service offerings include:'],
                        ['type' => 'list', 'items' => [
                            'Corporate / Employee Transportation Services (ETS) - Structured and dependable employee commute programs designed to ensure safe, timely, and efficient workforce mobility while supporting seamless daily operations.',
                            'Spot Rental Services - Flexible on demand vehicle solutions designed to support business meetings, corporate visits, and immediate travel requirements with efficiency and professionalism.',
                        ]],
                        ['type' => 'paragraph', 'text' => 'With nearly two decades of experience in the corporate transportation sector, DTC BHARAT - Delphinium Travelcorp Private Limited) continues to deliver mobility solutions built on safety, operational discipline, and service excellence.'],
                        ['type' => 'paragraph', 'text' => 'Our focus is simple. To support Corporates with transportation systems that enhance efficiency, reliability, and employee convenience, enabling businesses to move forward with confidence in a rapidly evolving corporate landscape.'],
                        ['type' => 'paragraph', 'text' => 'Because when mobility works seamlessly, businesses move forward without disruption.'],
                    ],
                ],
            ],
            [
                'slug' => 'why-driver-training-is-the-foundation-of-safe-mobility',
                'title' => 'Why Driver Training Is the Foundation of Safe Mobility',
                'excerpt' => 'In corporate transportation, safety begins long before the vehicle starts moving. It begins with a well trained driver.',
                'category' => 'Corporate Mobility',
                'featured_image_path' => '/images/blogs/team_training.jpeg',
                'content' => [
                    'heading' => 'Training Builds Safer Journeys',
                    'blocks' => [
                        ['type' => 'paragraph', 'text' => 'In corporate transportation, safety begins long before the vehicle starts moving. It begins with a well trained driver.'],
                        ['type' => 'paragraph', 'text' => 'Drivers are the most critical link in delivering safe, reliable, and professional mobility services. Every journey reflects not only driving skills but also the discipline, responsibility, and professionalism of the person behind the wheel.'],
                        ['type' => 'paragraph', 'text' => 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we place strong emphasis on structured driver training and continuous skill development, ensuring that every driver represents our standards of safety, professionalism, and service excellence.'],
                        ['type' => 'paragraph', 'text' => 'Our driver training programs focus on:'],
                        ['type' => 'list', 'items' => [
                            'Defensive driving and road safety practices',
                            'Professional behaviour and passenger etiquette',
                            'Corporate safety protocols and compliance awareness',
                            'Emergency preparedness and responsible decision making',
                            'Punctuality, route discipline, and service reliability',
                        ]],
                        ['type' => 'paragraph', 'text' => 'Through continuous training, monitoring, and operational guidance, we ensure that every driver representing DTC BHARAT understands the responsibility of transporting corporate professionals safely and respectfully.'],
                        ['type' => 'paragraph', 'text' => 'Because in corporate mobility, a well trained driver is the foundation of every safe and dependable journey.'],
                    ],
                ],
            ],
        ];

        foreach ($posts as $post) {
            BlogPost::query()->updateOrCreate(
                ['slug' => $post['slug']],
                [
                    'user_id' => $author->id,
                    'title' => $post['title'],
                    'excerpt' => $post['excerpt'],
                    'category' => $post['category'],
                    'featured_image_path' => $post['featured_image_path'],
                    'content' => $post['content'],
                    'status' => BlogPostStatus::PUBLISHED,
                    'published_at' => $publishedAt,
                    'archived_at' => null,
                ]
            );
        }
    }
}
